type AppendToObject<T, K extends PropertyKey, V> = T & {
  [P in K]: V;
} extends infer R
  ? {
      [K in keyof R]: R[K];
    }
  : never;
type Test = { id: '1' };
type Result = AppendToObject<Test, 'value', 4>; // expected to be { id: '1', value: 4 }

export {};
