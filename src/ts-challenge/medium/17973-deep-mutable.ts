type DeepMutable<T> = T extends object
  ? {
      -readonly [K in keyof T]: DeepMutable<T[K]>;
    }
  : T;

type X = {
  readonly a: () => 1;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: 's';
        };
        readonly k: 'hello';
      };
    };
  };
};

type Expected = {
  a: () => 1;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: 's';
        };
        k: 'hello';
      };
    };
  };
};

type Todo = DeepMutable<X>; // should be same as `Expected`

export {};
