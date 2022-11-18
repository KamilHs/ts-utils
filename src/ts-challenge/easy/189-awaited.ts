type MyAwaited<T> = T extends Promise<infer K>
  ? MyAwaited<K>
  : T extends { then: (onfulfilled: (arg: infer U) => any) => any }
  ? U
  : T;

type ExampleType = Promise<string>;

type Result = MyAwaited<ExampleType>; // string

export {};
