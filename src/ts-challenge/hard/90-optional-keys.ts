type OptionalKeys<T extends object> = keyof {
  [K in keyof T as Pick<T, K> extends Required<Pick<T, K>> ? never : K]: T[K];
};

type I = OptionalKeys<{ foo: number; bar?: string }>; // expected to be "bar"

export {};
