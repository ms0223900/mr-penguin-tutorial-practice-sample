type SeqList<T extends (number | string)[] = ??> = {
  seqName: string;
  seqs: T;
};
