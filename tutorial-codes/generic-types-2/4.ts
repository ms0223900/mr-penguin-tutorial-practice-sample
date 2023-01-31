export interface GenericI<T> {
  [key: string]: T;
}

type NumValObj = GenericI<number>;
const numValObj: NumValObj = {
  res: 123,
  // res2: '123'
};

// 如同type的這樣寫...
export type GenericT<T> = {
  [key: string]: T;
};
// export type GenericKeyValObj<T extends keyof any, P> = {
//   [key in T]: P
// }
// type ApiKey = 'user' | 'id' | 'password'
// type UserApiData = GenericKeyValObj<ApiKey, string>

// ---2
type GenericApiFn<Params, Res> = (params: Params) => Res;

interface ApiContainerProps<Params, Res> {
  initData: Res;
  onAsyncCb: GenericApiFn<Params, Res>;
}

// --3
interface FnI {
  <T>(param: T): T[];
}
type FnT = <T>(param: T) => T[];

const fn: FnI = (param) => [param];

// --4
interface GenericFnI<T> {
  (param: T): T[];
}
const fn2: GenericFnI<string> = (param) => [param];
