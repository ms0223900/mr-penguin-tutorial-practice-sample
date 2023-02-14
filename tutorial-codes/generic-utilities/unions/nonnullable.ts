type NullableDataList = null | any[];
type DataList = NonNullable<NullableDataList>;

//... 實作
type MyNonNullable<T> = T & {};
type FalseT = false & {};
type UndefinedT = undefined & {};

//...實作2
