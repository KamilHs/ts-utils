type Concat<T extends any[], E extends any[]> = [...T, ...E];

type Result = Concat<[1], [2]>; // expected to be [1, 2]

export {};
