type Replace<
  T extends string,
  P extends string,
  R extends string,
> = T extends `${infer A}${P}${infer B}` ? `${A}${R}${B}` : T;
type replaced = Replace<'types are fun!', 'fun', 'awesome'>; // expected to be 'types are awesome!'
