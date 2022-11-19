type Flatten<T, A extends any[] = []> = T extends [infer F, ...infer R]
  ? [F] extends [never]
    ? A
    : F extends any[]
    ? Flatten<[...F, ...R], A>
    : Flatten<R, [...A, F]>
  : A;

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]

export {};
