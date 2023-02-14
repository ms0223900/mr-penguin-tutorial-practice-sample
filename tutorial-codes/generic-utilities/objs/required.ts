type SomeObj = {
  a?: string; // 可選的
  b: number;
};

type Obj = Required<SomeObj>;

//實作...
type MyRequired<T> = {
  [K in keyof T]-?: T[K]; //-?
};

type RequiredObj = MyRequired<SomeObj>;
