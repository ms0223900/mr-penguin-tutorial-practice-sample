// 將以下泛型寫完整
// type
type FnType = <>(input) => //...?

// interface
interface FnType {
	<>(input): //...?
}

// 實現以下需求
const fn: FnType = (input) => {
	return Array(~~(Math.random() * 10)).fill(0).map(() => input);
}

fn(10); // number[]
fn('hi'); // string[]