type SomeObj = {
  a?: string; // 可選的
  b: number;
};

type Obj = Required<SomeObj>;

const obj: Obj = {
  b: 0,
  a: "",
};

//實作...
type MyRequired<T> = {
  [K in keyof T]-?: T[K]; //-?
};

type RequiredObj = MyRequired<SomeObj>;
