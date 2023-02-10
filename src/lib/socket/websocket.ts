import { call } from 'redux-saga/effects';
import Constants, {
  REQUEST_CREATE_MEMBER,
  REQUEST_CREATE_MESSAGE,
  REQUEST_GET_CONVERSATIONS,
  REQUEST_GET_LIST_CONVERSATIONS,
  REQUEST_GET_MEMBER,
  REQUEST_GET_MESSAGE,
  REQUEST_MAKE_CONVERSATION,
} from './constants';
import Storage from 'utils/Storage';
import { IListConversationResponse } from './response';

var userId = Storage.getFieldOfUser('id');
var token = Storage.getFieldOfUser('token');

class _Websocket {
  // get value localstorage

  //WebSocket settings
  webSocketUrl = Constants.WEBSOCKET_URL;
  reconnectTimeout = 10 * 1000; //10 Seconds

  //Reconnect timer
  reconnectTimer: ReturnType<typeof setInterval> | null = null;

  //This is our WebSocket connection. We will use the context to access this
  //specific object.
  ws = new WebSocket(this.webSocketUrl + '?id=' + userId + '&token=' + token);

  /**
   * This is an event that occurs when the WebSocket connection is established
   * If there are any tasks that need to be performed like getting an access
   * token, this is the place to do it
   */
  wsOpen = () => {
    //Open stuff goes here
    console.log('connect websocket success!');
  };

  /**
   * When the socket closes, try to reconnect after a timeout
   * @param e Event
   */
  wsClose = (e: any) => {
    console.log(e);
    console.log(
      `Socket is closed. Reconnect will be attempted in ${
        this.reconnectTimeout / 1000
      } seconds.`,
      e.reason,
    );
    this.reconnectTimer = setInterval(this.wsReconnect, this.reconnectTimeout);

    //Extra closey stuff goes here
  };

  /**
   * If the WebSocket errors out, try to reconnect after the timeout
   * We are simply routing the error handler to the closer handler
   * @param e
   */
  wsError = (e: any) => {
    this.wsClose(e);
  };

  /**
   * Reconnects the WebSocket after a timeout
   * @returns WebSocket | null
   */
  wsReconnect = () => {
    this.ws = new WebSocket(this.webSocketUrl);
    if (this.ws && this.reconnectTimer) {
      console.log('Socket reconnected');
      clearInterval(this.reconnectTimer);
    }

    //Extra error-y stuff goes here

    //Return the new WebSocket connection
    return this.ws;
  };

  SocketConnect = (): void => {
    //Assign our event handlers
    this.ws.onopen = this.wsOpen;
    //When the connection is closed, reconnect after waiting for one second
    this.ws.onclose = this.wsClose;
    this.ws.onerror = this.wsClose;
  };

  /**
   * the following is called when a message is received
   * @param callback Usually a function
   */
  onMessage = (requestId: number, callback: any) => {
    this.ws.addEventListener('message', (messageEvent: MessageEvent) => {
      this.switchMessage(messageEvent, requestId, callback);
    });
  };
  removeEventListenerMessage(callback: any) {
    this.ws.removeEventListener('message', callback);
  }

  switchMessage(message: MessageEvent, requestId: number, callBack: any) {
    try {
      const response = JSON.parse(message.data);
      switch (response.id) {
        case REQUEST_CREATE_MESSAGE: //1001
          if (requestId === response.id) callBack(response);
          break;
        case REQUEST_GET_MESSAGE: //1002
          if (requestId === response.id) callBack(response);
          break;
        case REQUEST_MAKE_CONVERSATION: // 1011
          if (requestId === response.id) callBack(response);
          break;
        case REQUEST_GET_LIST_CONVERSATIONS: // 1012
          if (requestId === response.id) callBack(response);
          break;
        case REQUEST_GET_CONVERSATIONS: //1013
          if (requestId === response.id) callBack(response);
          break;
        case REQUEST_CREATE_MEMBER: //1021
          if (requestId === response.id) callBack(response);
          break;
        case REQUEST_GET_MEMBER: //1022
          break;

        default:
          break;
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      console.warn('Something went wrong while decoding the Message Payload');
    }
  }

  requestGetListConversation() {
    const data = JSON.stringify({ id: REQUEST_GET_LIST_CONVERSATIONS });

    this.ws.send(data);
  }

  getListConversation = (responseData: IListConversationResponse) => {
    console.log(responseData.d);
  };

  /**
   * the following is called when websocket is close
   * @param callback Usually a function
   */
  onClose(callback: any) {
    this.ws.addEventListener('close', callback);
  }
  removeEventListenerClose(callback: any) {
    this.ws.removeEventListener('close', callback);
  }

  /**
   * the following is called when websocket is close
   * @param callback Usually a function
   */
  onOpen(callback: any) {
    this.ws.addEventListener('open', callback);
  }
  removeEventListenerOpen(callback: any) {
    this.ws.removeEventListener('open', callback);
  }

  onSend(message) {
    this.ws.send(JSON.stringify(message));
  }
  // removeEventSendMessage(callback: any) {
  //   this.ws.removeEventListener('send', callback);
  // }
}

const Websocket = new _Websocket();
export default Websocket;
