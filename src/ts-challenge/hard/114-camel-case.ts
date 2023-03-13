type _CamelCase<T extends string> =
  T extends `${infer Left extends string}_${infer Right extends string}`
    ? `${Left}${_CamelCase<Capitalize<Right>>}`
    : T;
type CamelCase<T extends string> = _CamelCase<Lowercase<T>>;

type camelCase1 = CamelCase<'hello_world_with_types'>; // expected to be 'helloWorldWithTypes'
type camelCase2 = CamelCase<'HELLO_WORLD_WITH_TYPES'>; // expected to be same as previous one

export {};
