type Diff<O, O1> = Omit<O, keyof O1> & Omit<O1, keyof O> extends infer R
  ? {
      [K in keyof R]: R[K];
    }
  : never;

export {};
