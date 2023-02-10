import { IRequestId, IErrorMessage } from './general';
import { REQUEST_CREATE_MESSAGE, REQUEST_GET_MESSAGE } from './constants';

/**
 *  
    id -> RequestId
    d -> data
    u -> Id người gửi
    cv -> Id conversation
    c -> Nội dung message
    ct -> Create time
    id -> Id message
    nn -> nickname
    e -> error
      0 -> success
      1 -> system_error
      10 -> Update message error
      11 -> Receiver offline
 */

export type dataReceivedMessage = {
  u: number;
  cv: number;
  c: { txt: String };
  ct: number;
  id: number;
  nn: String;
};

export interface IReceivedMessageResponse
  extends IRequestId<1001>,
    IErrorMessage {
  d: dataReceivedMessage;
}

/**
 * l : list
 */
export interface IGetMessageResponse extends IRequestId<1002>, IErrorMessage {
  d: {
    l: { id: number; u: number; cv: number; c: { txt: String }; ct: number }[];
  };
}

/**
 * ! Conversation
 * n : name conversation
 * o : owner id
 */
export interface IMakeConversationResponse
  extends IRequestId<1011>,
    IErrorMessage {
  d: { cv: Number; r: { t: number; n: String; f: Number } };
}

export interface IListConversationResponse
  extends IRequestId<1012>,
    IErrorMessage {
  d: { l: { cv: number }[] };
}
export interface IGetConversationResponse
  extends IRequestId<1013>,
    IErrorMessage {
  d: { id: number; n: String; o: number };
}

/**
 * ! Member
 */
export interface ICreateMemberResponse extends IRequestId<1021>, IErrorMessage {
  d: { id: number; n: String; o: number };
}
export interface IGetMemberResponse extends IRequestId<1022>, IErrorMessage {
  d: { l: { u: number }[] };
}
