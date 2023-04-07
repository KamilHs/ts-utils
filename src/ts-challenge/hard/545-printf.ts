type Map = {
  s: string;
  d: number;
};

type Format<T extends string> =
  T extends `%${infer Operator extends keyof Map}${infer Rest}`
    ? (arg: Map[Operator]) => Format<Rest>
    : string;

type FormatCase1 = Format<'%sabc'>; // FormatCase1 : string => string
type FormatCase2 = Format<'%s%dabc'>; // FormatCase2 : string => number => string
type FormatCase3 = Format<'sdabc'>; // FormatCase3 :  string
type FormatCase4 = Format<'sd%abc'>; // FormatCase4 :  string

export {};
