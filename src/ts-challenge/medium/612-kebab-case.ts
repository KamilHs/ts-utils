type KebabCase<
  S extends string,
  P extends string = never,
> = S extends `${infer C}${infer R}`
  ? C extends '-'
    ? KebabCase<R, `${P}${C}`>
    : Uppercase<C> extends C
    ? [P] extends [never]
      ? KebabCase<R, Lowercase<C>>
      : KebabCase<R, `${P}-${Lowercase<C>}`>
    : [P] extends [never]
    ? KebabCase<R, C>
    : KebabCase<R, `${P}${C}`>
  : P;

type FooBarBaz = KebabCase<'FooBarBaz'>;
const foobarbaz: FooBarBaz = 'foo-bar-baz';

type DoNothing = KebabCase<'do-nothing'>;
const doNothing: DoNothing = 'do-nothing';

export {};
