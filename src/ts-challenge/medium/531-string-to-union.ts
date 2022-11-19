type StringToUnion<T extends string> = T extends `${infer C}${infer R}`
  ? C | StringToUnion<R>
  : never;
type Test = '123';
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"

export {};
