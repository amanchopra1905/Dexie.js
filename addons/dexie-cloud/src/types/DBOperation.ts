import { DBCoreKeyRange } from "dexie";

export type DBOperation = DBInsertOperation | DBUpsertOperation | DBUpdateOperation | DBDeleteOperation;

export interface DBInsertOperation {
  rev?: number;
  type: "insert";
  keys: any[];
  txid: string;
  values?: any[];
}

export interface DBUpsertOperation {
  rev?: number;
  type: "upsert";
  keys: any[];
  txid: string;
  values?: any[];
}

export interface DBUpdateOperation {
  rev?: number;
  type: "update";
  keys: any[]; // Needed also when criteria is specificied: for server->client rollback operation 
  txid: string;
  criteria?:
    | {
        index: string | null;
        range: DBCoreKeyRange;
      }
    | false;
  changeSpec: { [keyPath: string]: any };
}

export interface DBDeleteOperation {
  rev?: number;
  type: "delete";
  keys: any[]; // Needed also when criteria is specificied: for server->client rollback operation 
  txid: string;
  criteria?:
    | {
        index: string | null;
        range: DBCoreKeyRange;
      }
    | false;
}

