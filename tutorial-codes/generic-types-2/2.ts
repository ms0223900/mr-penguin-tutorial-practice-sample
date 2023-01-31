// template
type GenericList<T> = T[];

// output
type StrList = GenericList<string>;
type BoolList = GenericList<boolean>;

type GenericValObj<T> = { [key: string]: T };

type NumValObj = GenericValObj<number>;
const numValObj: NumValObj = {
  img_res_200: 200,
  // is_available: false,
};

//----
type GenericUnion<T, U> = T | U | T[] | U[];

type StrNumUnion = GenericUnion<string, number>;

const val: StrNumUnion = "123";
const val2: StrNumUnion = ["123"];

// ---
const fn = <T>(param: T): T[] => {
  return [param];
};

// rewrite...
type GenericFn = <T>(param: T) => T[];

// const fn: GenericFn = (param) => {
//   return [param];
// };

interface Props {
  onCb: typeof fn;
}
