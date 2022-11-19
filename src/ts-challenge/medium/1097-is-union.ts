type IsUnion<T, U = T> = [T] extends [never]
  ? false
  : T extends U
  ? [Exclude<U, T>] extends [never]
    ? false
    : true
  : false;

type case1 = IsUnion<string>; // false
type case2 = IsUnion<string | number>; // true
type case3 = IsUnion<[string | number]>; // false

export {};