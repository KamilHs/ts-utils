type Zip<T extends any[], U extends any[]> = U extends []
  ? []
  : T extends [infer TF, ...infer TR]
  ? U extends [infer UF, ...infer UR]
    ? [[TF, UF], ...Zip<TR, UR>]
    : []
  : [];
type exp = Zip<[1, 2], [true, false]>; // expected to be [[1, true], [2, false]]

export {};
