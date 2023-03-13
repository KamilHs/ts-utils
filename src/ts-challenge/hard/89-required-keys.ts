type RequiredKeys<T extends object> = keyof {
  [K in keyof T as Pick<T, K> extends Required<Pick<T, K>> ? K : never]: T[K];
};

type I = RequiredKeys<{ foo: number; bar?: string }>; // expected to be "foo"

export {};
