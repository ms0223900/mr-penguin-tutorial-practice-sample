type ReturnedVal<T> = { value: T };

// type FnType<T> = (input: T) => {
//   getVal: () => ReturnedVal<T>;
//   setVal: (newVal: T) => ReturnedVal<T>;
// };

interface FnType<T> {
  (input: T): {
    getVal(): ReturnedVal<T>;
    setVal(newVal: T): ReturnedVal<T>;
  };
}
