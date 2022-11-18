type ReplaceAll<
  T extends string,
  P extends string,
  R extends string,
> = T extends `${infer A}${P}${infer B}` ? ReplaceAll<`${A}${R}${B}`, P, R> : T;
type replaced = ReplaceAll<'t y p e s', ' ', ''>; // expected to be 'types'

export {};
