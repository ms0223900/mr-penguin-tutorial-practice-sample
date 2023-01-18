// 完成以下MyMap這個型別
type MyMap = <T, P>() => //...

// 這個型別在function上會是這樣實作
const map: MyMap = (dataList, cb) => dataList.map(cb);

// 滿足以下所有條件，讓TS不會報錯
map([123], (d) => `${d}`);

const res1 = map([""], (data) => !!data);
type BoolList = typeof res1; // boolean[]

const res2 = map([123, 456], (data) => String(data));
type StrList = typeof res2; // string[]