type IncrementMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
type LastDigitMap = {
  10: 0;
};

type LastCharacter<T extends string> = T extends `${infer First}${infer Last}`
  ? Last extends ''
    ? First
    : LastCharacter<Last>
  : T;

export type _Increment<
  Number extends string,
  Carry extends 0 | 1 = 0,
  Result extends string = '',
> = Number extends ''
  ? Carry extends 0
    ? Result
    : `${Carry}${Result}`
  : Carry extends 0
  ? `${Number}${Result}`
  : LastCharacter<Number> extends `${infer LastDigit extends number}`
  ? IncrementMap[LastDigit] extends infer Incremented extends number
    ? Number extends `${infer Rest}${LastDigit}`
      ? Incremented extends keyof LastDigitMap
        ? _Increment<Rest, 1, `${LastDigitMap[Incremented]}${Result}`>
        : `${Rest}${Incremented}${Result}`
      : never
    : never
  : never;

export type Increment<T extends number> = _Increment<
  `${T}`,
  1
> extends `${infer Result extends number}`
  ? Result
  : never;

type Case1 = Increment<1>;
type Case2 = Increment<9>;
type Case3 = Increment<999>;
type Case4 = Increment<1899999999999999>;
