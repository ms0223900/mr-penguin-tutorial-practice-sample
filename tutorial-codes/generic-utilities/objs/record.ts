type StrObj = Record<string, string>;
// type StrObj = {
//   [key: string]: string;
// }

type DataKey = "id" | "username" | "link";
type ApiData = Record<DataKey, string>;
// type ApiData = {
//   id: string;
//   username: string;
//   link: string;
// }

// 實作
type MyRecord<Key extends keyof any, Val> = {
  [key in Key]: Val;
};
