type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

type MyAwaited<T> = T extends undefined | null
  ? T
  : T extends Record<any, any> & {
      then(onfulfilled: infer F, ...args: infer _): any;
    }
  ? F extends (val: infer V) => any
    ? Awaited<V>
    : never
  : T;

type AwaitedData = MyAwaited<Promise<Promise<string>>>; // string
