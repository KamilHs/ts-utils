type Last<A extends any[]> = A extends [...infer _U, infer V] ? V : never;

type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type tail1 = Last<arr1>; // expected to be 'c'
type tail2 = Last<arr2>; // expected to be 1

export {};
