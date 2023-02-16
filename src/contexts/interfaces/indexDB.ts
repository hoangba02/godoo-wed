import { IDBStore } from './../idb';

export type DatabaseStore<StoreName extends string> = Omit<IDBStore, 'name'> & {
  name: StoreName;
};
export type Database<StoreName extends string> = {
  name: string;
  version: number;
  stores: DatabaseStore<StoreName>[];
};

export type IConversation = {
  id: Number;
  n: String;
  o: Number;
  t: Number;
};

export type IMember = { u: Number; st: Number }[];
