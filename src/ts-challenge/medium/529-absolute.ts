type Absolute<T extends string | number | bigint> = `${T}` extends `-${infer N}`
  ? N
  : T;
type Test = -100;
type Result = Absolute<Test>; // expected to be "100"

export {};
