type Push<T extends any[], E> = [...T, E];
type Result = Push<[1, 2], '3'>; // [1, 2, '3']

export {};
