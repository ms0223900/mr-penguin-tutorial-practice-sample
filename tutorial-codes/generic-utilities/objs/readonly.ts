type MyApiData = {
  id: string;
  username?: string;
};

type ReadonlyApiData = Readonly<MyApiData>;

const readonlyApiData: ReadonlyApiData = {
  id: "",
};

// 不可再重新指派value
// readonlyApiData.id = "1"; // freeze!

// 實作
type MyReadonly<Obj> = {
  readonly [k in keyof Obj]: Obj[k];
};

type MyReadonlyData = MyReadonly<MyApiData>;
