type MyMap = <T, P>(listData: T[], cb: (data: T, index: number) => P) => P[];

const map: MyMap = (dataList, cb) => dataList.map(cb);

map([123], (d) => `${d}`);

const res1 = map([""], (data) => !!data);
type BoolList = typeof res1; // boolean[]

const res2 = map([123, 456], (data) => String(data));
type StrList = typeof res2; // string[]
