type All<T extends unknown[], U extends T[number]> = T extends []
  ? true
  : T extends [U, ...infer R]
  ? All<R, U>
  : false;

type Test1 = [1, 1, 1];
type Test2 = [1, 1, 2];

type Todo = All<Test1, 1>; // should be same as true
type Todo2 = All<Test2, 1>; // should be same as false

export {};
