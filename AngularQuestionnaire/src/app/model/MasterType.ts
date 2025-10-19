import { Client } from "./Client";

// TypeScript定义的类型Model
export interface BaseType {
  name: string;
  age: number;
  foo: any; // any tpye of variable
  hasOK: boolean;

  numberArray: number[]; // [1, 2, 3]
  stringArray: string[]; // ['hello', 'world']
  anyArray: any[]; // ['hello', ture]
  myTupe: [string, number, boolean]; // <Map> type ['tong', 2, true]
  // myTupeMap: [string, number, boolean][]; // <Map> type ['tong', 2, true]
  
  unusable: void;
  n: undefined; // = undefined
  u: null; // = null
  
  // object variable 需要引入自定义的类型
  client: Client;
}