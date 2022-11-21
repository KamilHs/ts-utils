type Trunc<T extends string | number> =
  `${T}` extends `${infer I extends number}.${any}` ? I : T;

type A = Trunc<12.34>; // 12

export {};
