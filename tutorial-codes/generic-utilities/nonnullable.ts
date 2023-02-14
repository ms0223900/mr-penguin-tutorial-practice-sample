type MyNonNullable<T> = T extends null
  ? Exclude<T, null | undefined>
  : T extends undefined
  ? Exclude<T, undefined>
  : T;

type B = MyNonNullable<string[] | number | null | undefined>;

type DataFromAPIList = string[];
type RankDataList = number[];
type CheckedData = boolean;

type DataList = DataFromAPIList | RankDataList | CheckedData;
type SingleUserDataList = Extract<DataList, any[]>;
