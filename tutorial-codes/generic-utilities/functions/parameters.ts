function sum(a: number, b: number): number {
  return a + b;
}

type Params = Parameters<typeof sum>;

type DevideFn = (param: { a: number; b: number }) => number;
type DevideFnParams = Parameters<DevideFn>;

// 實作
// infer 推斷
type MyParameters<F extends Function> = F extends (...params: infer P) => any
  ? P
  : never;

type DParams = MyParameters<DevideFn>;
