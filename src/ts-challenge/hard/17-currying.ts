declare function Currying<F extends (...args: any[]) => any>(
  fn: F,
): Fn<Parameters<F>, ReturnType<F>>;

type Fn<Args, R> = Args extends [infer First]
  ? (p: First) => R
  : Args extends [infer First, ...infer Rest]
  ? (p: First) => Fn<Rest, R>
  : never;

const add = (a: number, b: number) => a + b;
const three = add(1, 2);

const curriedAdd = Currying(add);
const five = curriedAdd(2)(3);

export {};
