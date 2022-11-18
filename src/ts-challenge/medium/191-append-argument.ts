type AppendArgument<Fn extends (...args: any[]) => any, A> = (
  ...args: [...Parameters<Fn>, A]
) => ReturnType<Fn>;
type Fn = (a: number, b: string) => number;

type Result = AppendArgument<Fn, boolean>;
// expected be (a: number, b: string, x: boolean) => number
