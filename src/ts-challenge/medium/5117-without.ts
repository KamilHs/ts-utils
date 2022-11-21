type Includes<T extends any, U extends any> = U extends any[]
  ? T extends U[number]
    ? true
    : false
  : T extends U
  ? true
  : false;

type Without<T extends any[], U extends any> = T extends [infer F, ...infer R]
  ? Includes<F, U> extends true
    ? Without<R, U>
    : [F, ...Without<R, U>]
  : T;

type Res = Without<[1, 2], 1>; // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []

export {};
