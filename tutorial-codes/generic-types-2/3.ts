// function generic types review

// function fn<T>(param: T): T[] {
//   return [param];
// }

// const fn = <T>(param: T): T[] => [param]

// type FnType = typeof fn;
// // 等同於
// type FnType = <T>(param: T) => T[];

// 比較一下<T>的位置

type FnType1 = <T>(param: T) => T[];
type FnType2<T> = (param: T) => T[];

const fn1: FnType1 = (param) => {
  return [param];
};
const fn2: FnType2<string> = (param) => {
  return [param];
};

fn1("hello");
fn1(123);

//...

export type ClickFn = <Event>(e: Event) => any;

//import...
// [X]
function handleClick() {}

// [V]
const handleClick: ClickFn = (e) => {};
