import Storage from 'utils/Storage';
import { store } from 'index';
import Constants, {
  REQUEST_CREATE_MEMBER,
  REQUEST_CREATE_MESSAGE,
  REQUEST_GET_CONVERSATIONS,
  REQUEST_GET_LIST_CONVERSATIONS,
  REQUEST_GET_MEMBER,
  REQUEST_GET_MESSAGE,
  REQUEST_MAKE_CONVERSATION,
} from './constants';
import {
  ICreateMemberResponse,
  IGetConversationResponse,
  IGetMemberResponse,
  IGetMessageResponse,
  IListConversationResponse,
  IMakeConversationResponse,
  IReceivedMessageResponse,
} from './interfaces/response';

import IDBStorage from './idb';
import { DatabaseChatIDB } from './db';
import { IConversation, IMember } from './interfaces/indexDB';
import { chatActions } from 'store/slice/chatSlice';

var userId = Storage.getFieldOfUser('id');
var token = Storage.getFieldOfUser('token');

class _Websocket {
  public IDBStorageChat = new IDBStorage(DatabaseChatIDB, 'chat');
  //WebSocket settings
  private webSocketUrl = Constants.WEBSOCKET_URL || 'ws://ttvnapi.com/v1';
  private reconnectTimeout = 5 * 1000; //10 Seconds
  //Reconnect timer
  private reconnectTimer: ReturnType<typeof setInterval> | null = null;

  private ws: WebSocket | undefined;

  constructor(protected userId: number, protected token: string) {
    // this.IDBStorageChat = ;
    this.connect(userId, token);

    return this;
  }

  public connect = (userId: number, token: string) => {
    this.ws = new WebSocket(
      this.webSocketUrl + '?id=' + userId + '&token=' + token,
    );

    this.ws.addEventListener('open', this.handleOpen);
    this.ws.addEventListener('close', this.handleClose);
    this.ws.addEventListener('error', this.handleError);
    this.ws.addEventListener('message', this.handleMessage);

    return this.ws;
  };

  private removeListeners() {
    if (!this.ws) {
      return;
    }

    this.ws.removeEventListener('open', this.handleOpen);
    this.ws.removeEventListener('close', this.handleClose);
    this.ws.removeEventListener('error', this.handleError);
    this.ws.removeEventListener('message', this.handleMessage);
    this.ws = undefined;
  }

  public close() {
    if (!this.ws) {
      return;
    }

    try {
      this.ws.close();
      this.removeListeners();
    } catch (err) {}
  }

  private handleOpen = () => {
    console.log('connect success !');

    this.requestGetAllConversation();
  };

  private handleError = (e: Event) => {
    console.log(e);
    this.close();
    this.handleClose();
  };

  private handleClose = (e?: CloseEvent) => {
    this.removeListeners();
    console.log(
      `Socket is closed. Reconnect will be attempted in ${
        this.reconnectTimeout / 1000
      } seconds.`,
      e?.reason,
    );

    this.reconnectTimer = setInterval(this.wsReconnect, this.reconnectTimeout);
  };

  private wsReconnect = () => {
    let socket = this.connect(this.userId, this.token);

    if (socket && this.reconnectTimer) {
      console.log('Socket reconnected');
      clearInterval(this.reconnectTimer);
    }

    return socket;
  };

  private handleMessage = (event: MessageEvent) => {
    try {
      let _this = this;
      const response = JSON.parse(event.data);
      if (response)
        switch (response.id) {
          case REQUEST_CREATE_MESSAGE: //1001
            _this.listenReceivedMessage(response);
            break;
          case REQUEST_GET_MESSAGE: //1002
            _this.listenGetMessage(response);
            break;
          case REQUEST_MAKE_CONVERSATION: //1011
            _this.listenCreateConversation(response);
            break;
          case REQUEST_GET_LIST_CONVERSATIONS: //1012
            _this.listenGetListConversation(response);
            break;
          case REQUEST_GET_CONVERSATIONS: //1013
            _this.listenGetConversation(response);
            break;
          case REQUEST_CREATE_MEMBER: //1021
            _this.listenCreateMember(response);
            break;
          case REQUEST_GET_MEMBER: //1022
            _this.listenGetMember(response);
            break;

          default:
            break;
        }
      else console.log('không tồn tại ');
    } catch (error) {
      console.log(error);
      console.warn('Something went wrong while decoding the Message Payload');
    }
  };

  private listenReceivedMessage = async (res: IReceivedMessageResponse) => {
    // chưa hoàn thiện lắm . thiếu cache để tối ưu hơn
    console.log(res);
    if (res.e === 0) {
      let dataConversation: Object[] | undefined =
        await this.IDBStorageChat.get(String(res.d.cv), 'message');
      console.log(dataConversation);
      if (dataConversation === undefined)
        return this.requestGetMessage(res.d.cv);
      else {
        console.log(dataConversation);
        const conversationNew = {
          id: res.d.id,
          cv: res.d.cv,
          u: res.d.u,
          c: res.d.c,
          ct: res.d.ct,
        };

        dataConversation.unshift(conversationNew);
      }

      console.log(dataConversation);
      // save store
      const result = await this.IDBStorageChat.put(
        String(res.d.cv),
        dataConversation,
        'message',
      );
      if (result) {
        store.dispatch(chatActions.setSendingMessage(true));
      }
    }
  };

  private listenGetMessage = async (res: IGetMessageResponse) => {
    console.log(res);
    if (res.e === 0 && res.d.l.length !== 0) {
      const hadAxist = await this.IDBStorageChat.get(
        String(res.d.l[0].cv),
        'message',
      );

      if (hadAxist) return;

      store.dispatch(chatActions.setSendingMessage(true));

      this.IDBStorageChat.put(String(res.d.l[0].cv), res.d.l, 'message');
    }
  };

  private listenCreateConversation(res: IMakeConversationResponse) {
    console.log(res);
    if (res.e === 0 && res.d) {
      const resultConversation: IConversation = {
        id: res.d.cv,
        n: res.d.r.n,
        o: res.d.r.f,
        t: 1,
      };
      const resultMember: IMember = [
        {
          u: res.d.r.f,
          st: 0,
        },
        {
          u: res.d.r.t,
          st: 0,
        },
      ];

      //update idb when created success
      this.IDBStorageChat.add(
        String(res.d.cv),
        resultConversation,
        'conversation',
      );
      this.IDBStorageChat.add(String(res.d.cv), resultMember, 'member');

      //update stora when created success
      store.dispatch(chatActions.setCreatedConversation(true));
    }
  }

  private listenGetListConversation = async (
    res: IListConversationResponse,
  ) => {
    if (res.e === 0) {
      if (res.d.l.length === 0) return;

      for (let conversation of res.d.l) {
        this.requestGetConversation(conversation.cv);
        this.requestGetMenber(conversation.cv);
      }
    }
  };

  private listenGetConversation(res: IGetConversationResponse) {
    if (res.e === 0 && res.d) {
      this.IDBStorageChat.save(String(res.d.id), res.d, 'conversation');
    }
  }

  private listenCreateMember(res: ICreateMemberResponse) {
    console.log(res);
  }
  private listenGetMember = (res: IGetMemberResponse) => {
    if (res.e === 0 && res.d.l.length !== 0) {
      this.IDBStorageChat.add(String(res.d.cv), res.d.l, 'member');
    }
  };

  // ! request

  //create conversation
  public requestMakeConversation(friendId: number, chatName: String) {
    const body = {
      id: REQUEST_MAKE_CONVERSATION,
      d: { t: friendId, n: chatName },
    };
    this.send(body);
  }

  // get all conversations
  public requestGetAllConversation() {
    this.send({ id: REQUEST_GET_LIST_CONVERSATIONS });
  }

  // get singple conversation
  public requestGetConversation(cv: number) {
    const body = { id: REQUEST_GET_CONVERSATIONS, d: { cv } };

    this.send(body);
  }

  public requestGetMessage(cv: number, page: number = 0, limit: number = 10) {
    const body = {
      id: REQUEST_GET_MESSAGE,
      d: {
        cv: cv,
        p: page,
        cn: limit,
      },
    };

    this.send(body);
  }

  public requestSendMessage(
    cv: number,
    friendId: number,
    content: { txt: String },
  ) {
    const body = {
      id: REQUEST_CREATE_MESSAGE,
      d: {
        t: friendId,
        cv: cv,
        c: content,
      },
    };

    this.send(body);
  }

  public requestGetMenber(cv: number) {
    const body = { id: REQUEST_GET_MEMBER, d: { cv } };

    this.send(body);
  }

  public send = (body: Object) => {
    if (!this.ws) return;

    const bodyString = JSON.stringify(body);

    this.ws.send(bodyString);
  };

  // ! Check
  public checkExistingConversationWithTwoPeople = async (userId: number) => {
    const dataMemberIDB: IMember[] = await this.IDBStorageChat.getAll('member');

    for (let member of dataMemberIDB) {
      if (member.length === 2) {
        if (member[0].u === userId) return true;
        if (member[1].u === userId) return true;
      }
    }

    return false;
  };
}

const Websocket = new _Websocket(userId, token);
export default Websocket;
