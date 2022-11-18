type MyParameters<T> = T extends (...args: infer Args) => any ? Args : never;

const foo = (arg1: string, arg2: number): void => {};

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
export {};
