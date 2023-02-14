// type MyNonNullable<T> = T & {};

// type MyNonNullable<T> = Exclude<T, null | undefined>; //OK
type MyNonNullable<T> = T extends null
  ? Exclude<T, null>
  : T extends undefined
  ? Exclude<T, undefined>
  : T;

type NullableID = string | number | null | undefined;
type ID = MyNonNullable<NullableID>; // string | number
