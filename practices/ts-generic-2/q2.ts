// 將以下泛型寫完整（把該補的補一補）
// type
type FnType<T> = (input) => //...

// interface
interface FnType<T> {
	(input): //...?
}


// 實現以下需求
const fn: FnType<string> = (input) => {
    const val = { value: input };

    return {
        getVal: () => val,
        setVal: (newVal) => {
            val.value = newVal;
            return val;
        },
    };
};
