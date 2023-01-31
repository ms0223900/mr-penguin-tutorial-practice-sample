export interface CbA<T> {
  (param: T): T[];
}
export interface CbB {
  <T>(param: T): T[];
}

const cbA: CbA<number> = (param) => [param];
const cbB: CbB = (param) => [param];

// ---

export interface PropsA<T> {
  onCb: (param: T) => T[];
}
const propsA: PropsA<boolean> = {
  onCb(param) {
    return [param];
  },
};
propsA.onCb(false);

export interface PropsB {
  onCb: <T>(param: T) => T[];
}
const propsB: PropsB = {
  onCb(param) {
    return [param];
  },
};
propsB.onCb("hello");
