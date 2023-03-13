type GetRequired<T extends object> = {
  [K in keyof T as Pick<T, K> extends Required<Pick<T, K>> ? K : never]: T[K];
};

type I = GetRequired<{ foo: number; bar?: string }>; // expected to be { foo: number }

export {};
