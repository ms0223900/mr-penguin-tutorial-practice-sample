// string[]
// type SeqList<T extends (number | string)[] = string[]> = {
//   seqName: string;
//   seqs: T;
// };

// // number[]
// type SeqList<T extends (number | string)[] = number[]> = {
//   seqName: string;
//   seqs: T;
// };

// // 或是兩個都給
type SeqList<T extends (number | string)[] = (number | string)[]> = {
  seqName: string;
  seqs: T;
};
