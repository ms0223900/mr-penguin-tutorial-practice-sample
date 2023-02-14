// 用infer來推斷「解包」Promise其中的型別
type MyAwaited<T> = T extends Promise<infer U> ? U : never;

type A = MyAwaited<Promise<boolean[]>>;

type MyParameter<T extends Function> = T extends (...params: infer U) => any
  ? U
  : never;

type Params = MyParameter<() => any>;
