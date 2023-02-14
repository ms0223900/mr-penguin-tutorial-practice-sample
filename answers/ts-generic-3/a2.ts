type GenericObjWithCustomKey<Key extends keyof any, Val = any> = {
  [key in Key]: Val;
};

//...
