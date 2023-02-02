type GenericObjWithCustomKey<Key extends ??, Val = any> = {
  [key in Key]: Val;
};

const symbolKey = Symbol("123");
type Key = "abc" | 123 | typeof symbolKey;

type MyObj = GenericObjWithCustomKey<Key>;
const obj: MyObj = {
  123: "",
  abc: "",
  [symbolKey]: "",
};
