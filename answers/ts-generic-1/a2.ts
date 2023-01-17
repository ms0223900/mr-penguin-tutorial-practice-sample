// 泛型
type Value<V> = {
  key: string;
  value: V;
};
type TreeNode<Val> = {
  root: Val;
  children: TreeNode<Val>[];
};

// 實際應用泛型
type ValueA = Value<number>;
type ValueB = Value<string[]>;

type NodeA = TreeNode<ValueA>;
type NodeB = TreeNode<ValueB>;

// 寫實際的資料
const nodeA: NodeA = {
  root: {
    key: "1",
    value: 10,
  },
  children: [
    {
      root: { key: "2", value: 20 },
      children: [],
    },
  ],
};
