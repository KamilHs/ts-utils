import { _Decrement } from './decrement';

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
  : LastCharacter<Number> extends `${infer LastDigit extends number}`
  ? IncrementMap[LastDigit] extends infer Incremented extends number
    ? Number extends `${infer Rest}${LastDigit}`
      ? Incremented extends keyof LastDigitMap
        ? _Increment<Rest, 1, `${LastDigitMap[Incremented]}${Result}`>
        : `${Rest}${Incremented}${Result}`
      : never
    : never
  : never;

export type Increment<T extends number> = (
  `${T}` extends `-${infer PositiveT extends string}`
    ? _Decrement<PositiveT> extends infer NegativeIncrementResult extends string
      ? NegativeIncrementResult extends '0'
        ? NegativeIncrementResult
        : `-${NegativeIncrementResult}`
      : never
    : _Increment<`${T}`, 1>
) extends `${infer Result extends number}`
  ? Result
  : never;

const case1: Increment<1> = 2;
const case2: Increment<9> = 10;
const case3: Increment<999> = 1000;
const case4: Increment<1899999999999999> = 1900000000000000;
const case5: Increment<-1000> = -999;
const case6: Increment<-1000000000> = -999999999;
const case7: Increment<-1> = 0;
