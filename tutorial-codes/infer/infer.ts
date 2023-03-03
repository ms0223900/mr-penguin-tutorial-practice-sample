// let x = 3;
// const x = 3

function makeList<T>(data: T, amount = 10) {
  return Array(amount)
    .fill(0)
    .map(() => data);
}
const dataList = makeList(8787);

type DataListT = typeof dataList;

//...簡單的Awaited

type SimpleAwaited<T> = T extends Promise<infer P> ? P : T;

type UserData = {
  id: string;
  email: string;
};
type PromiseUserData = Promise<UserData>;
type AwaitedUserData = SimpleAwaited<PromiseUserData>;

// ...
type MyFn = () => number;
// type MyFnReturned = ReturnType<MyFn>;

// ReturnType實作
type MyReturnType<T extends (...params: any) => any> = T extends (
  ...params: any
) => infer R
  ? R
  : never;

type MyFnReturned = MyReturnType<MyFn>;
