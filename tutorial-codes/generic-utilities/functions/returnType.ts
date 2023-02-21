function sum(a: number, b: number) {
  return a + b;
}

type SumFn = typeof sum;

type SumReturned = ReturnType<SumFn>;

// 實作~
type MyReturnType<F extends (...args: any) => any> = F extends (
  ...params: any
) => infer P
  ? P
  : never;

type Returned = MyReturnType<SumFn>;
