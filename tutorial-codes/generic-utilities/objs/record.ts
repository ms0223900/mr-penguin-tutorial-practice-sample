type StrObj = Record<string, string>;
// type StrObj = {
//   [key: string]: string;
// }

// sample2
type DataKey = "id" | "username" | "link";
type ApiData = Record<DataKey, string>;
// type ApiData = {
//   id: string;
//   username: string;
//   link: string;
// }
const apiData: ApiData = {
  id: "",
  username: "",
  link: "",
};

// 實作
type MyRecord<K extends keyof any, V> = {
  [key in K]: V;
};

type Recorded = MyRecord<string, string>;
