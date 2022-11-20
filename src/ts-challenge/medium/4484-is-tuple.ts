type IsTuple<T extends { length: number }> = number extends T['length']
  ? false
  : true;
type case1 = IsTuple<[number]>; // true
type case2 = IsTuple<readonly [number]>; // true
type case3 = IsTuple<number[]>; // false

export {};
