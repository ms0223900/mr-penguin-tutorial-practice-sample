type ID = number | string;
type StrID = Exclude<ID, number>;

type Fn = (params: any) => string;
type Excluded = Exclude<StrID | Fn, Function>;

// ...
