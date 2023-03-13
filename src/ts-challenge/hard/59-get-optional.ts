type GetOptional<T extends object> = {
  [K in keyof T as Pick<T, K> extends Required<Pick<T, K>> ? never : K]: T[K];
};

type I = GetOptional<{ foo: number; bar?: string }>; // expected to be { bar?: string }

export {};
