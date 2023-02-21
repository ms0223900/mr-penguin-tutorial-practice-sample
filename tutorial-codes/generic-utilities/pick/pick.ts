type ArticleData = {
  id: string;
  content: string;
  label: string;
};

// 挑出指定的key
type SimpleArticle = Pick<ArticleData, "content" | "label">;

// 實作

type MyPick<T extends object, K extends keyof T> = {
  [k in K]: T[k];
};

type ArticleWithContent = MyPick<ArticleData, "content">;
