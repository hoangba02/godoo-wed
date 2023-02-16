import { IRequestId } from './general';

/**
 * id  -> RequestId
 * d  -> Data gói tin
 * t  -> Id người nhận
 * cv  -> Id conversation
 * c -> Nội dung message
 */
export interface IRequestCreateMessage extends IRequestId<1001> {
  d: {
    t: number;
    cv: 15;
    c: { txt: String };
  };
}

/**
 * p -> page
 * cn -> count
 */
export interface IRequestGotMessage extends IRequestId<1002> {
  d: {
    cv: number;
    p: number;
    cn: number;
  };
}

/**
 * ! Conversation
 * n : name conversation
 */
export interface IRequestMakeConversation extends IRequestId<1011> {
  d: {
    t: Number;
    n: String;
  };
}

export interface IRequestGetListConversations extends IRequestId<1012> {}
export interface IRequestGetConversation extends IRequestId<1013> {
  d: {
    cv: number;
  };
}

/**
 * ! member
 */
export interface IRequestCreateMember extends IRequestId<1021> {
  d: {
    t: number;
    cv: number;
  };
}
export interface IRequestGetMember extends IRequestId<1022> {
  d: {
    cv: number;
  };
}
