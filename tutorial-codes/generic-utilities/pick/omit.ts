type ArticleData = {
  id: string;
  content: string;
  label: string;
};

// 適用於「挑掉少數」的key
type ArticleDataWithoutLabel = Omit<ArticleData, "label">;

// 實作
// 習題見
type MyOmit<T, K extends keyof T> = {
  [k in K]: T[k];
};
