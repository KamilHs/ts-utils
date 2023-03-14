type Data = {
  foo: {
    bar: {
      value: 'foobar';
      count: 6;
    };
    included: true;
  };
  hello: 'world';
};

type Get<T, K> = K extends keyof T
  ? T[K & keyof T]
  : K extends `${infer FK}.${infer LK}`
  ? Get<T[FK & keyof T], LK>
  : T[K & keyof T];

type A = Get<Data, 'hello'>; // 'world'
type B = Get<Data, 'foo.bar.count'>; // 6
type C = Get<Data, 'foo.bar'>; // { value: 'foobar', count: 6 }

export {};
