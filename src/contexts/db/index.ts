import { Database, DatabaseStore } from '../interfaces/indexDB';

export const conversationDB: DatabaseStore<string> = {
  name: 'conversation',
  indexes: [
    {
      indexName: 'id', //conversationId
      keyPath: 'id',
      objectParameters: {
        unique: false,
      },
    },
    {
      indexName: 'n', // conversationName
      keyPath: 'n',
      objectParameters: {
        unique: false,
      },
    },
    {
      indexName: 'o', //id owner
      keyPath: 'o',
      objectParameters: {
        unique: false,
      },
    },
    {
      indexName: 't', //type
      keyPath: 't',
      objectParameters: {
        unique: false,
      },
    },
  ],
};

export const messageDB: DatabaseStore<string> = {
  name: 'message',
  indexes: [
    // {
    //   indexName: 'id', // messageId
    //   keyPath: 'id',
    //   objectParameters: {
    //     unique: true,
    //   },
    // },
    // {
    //   indexName: 'u', //sender
    //   keyPath: 'u',
    //   objectParameters: {
    //     unique: false,
    //   },
    // },
    // {
    //   indexName: 'c', //content
    //   keyPath: 'c',
    //   objectParameters: {
    //     unique: false,
    //   },
    // },
    // {
    //   indexName: 'ct', //createdAt
    //   keyPath: 'ct',
    //   objectParameters: {
    //     unique: false,
    //   },
    // },
  ],
};

export const memberDB: DatabaseStore<string> = {
  name: 'member',
  indexes: [
    // {
    //   indexName: 'd', // data
    //   keyPath: 'd',
    //   objectParameters: {
    //     unique: false,
    //   },
    // },
    // {
    //   indexName: 'st', // status
    //   keyPath: 'st',
    //   objectParameters: {
    //     unique: false,
    //   },
    // },
  ],
};

export const statusDB: DatabaseStore<string> = {
  name: 'status',
  indexes: [
    {
      indexName: 'u', // status
      keyPath: 'u',
      objectParameters: {
        unique: false,
      },
    },
    {
      indexName: 'st', // status
      keyPath: 'st',
      objectParameters: {
        unique: false,
      },
    },
  ],
};

export const DatabaseChatIDB: Database<string> = {
  name: 'Chat',
  version: 1,
  stores: [conversationDB, messageDB, memberDB],
};
