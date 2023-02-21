type Props = {
  a: string;
  b: number;
  c: number[];
};
// type PartialProps = {
//   a?: string;
//   b?: number;
//   c?: number[];
// };

// Partial
type PartialProps = Partial<Props>;
