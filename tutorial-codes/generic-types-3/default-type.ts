type GenericTypeWithDefaultType<Val = string> = {
  [key: string]: Val;
};

type StrValObj = GenericTypeWithDefaultType;
type NumValObj = GenericTypeWithDefaultType<number>;

const strValObj: StrValObj = {
  abc: "",
};
const numValObj: NumValObj = {
  abc: 0,
};
