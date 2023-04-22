import { _Increment } from './increment';
import { GetNumberPositivePart, isNegativeNumber } from './number';

type DecrementMap = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8];
type NegativeCarryMap = {
  '-1': 9;
};

type LastCharacter<T extends string> = T extends `${infer First}${infer Last}`
  ? Last extends ''
    ? First
    : LastCharacter<Last>
  : T;

export type _Decrement<
  Number extends string,
  Result extends string = '',
> = Number extends ''
  ? Result
  : LastCharacter<Number> extends `${infer LastDigit extends number}`
  ? DecrementMap[LastDigit] extends infer Decremented extends number
    ? Number extends `${infer Rest}${LastDigit}`
      ? `${Decremented}` extends keyof NegativeCarryMap
        ? _Decrement<Rest, `${NegativeCarryMap[`${Decremented}`]}${Result}`>
        : `${Rest}${Decremented}${Result}` extends infer FinalResult extends string
        ? FinalResult extends `0${infer FinalResultWithoutLeadingZero extends string}`
          ? FinalResultWithoutLeadingZero extends ''
            ? FinalResult
            : FinalResultWithoutLeadingZero
          : FinalResult
        : never
      : never
    : never
  : never;

export type _DecrementNegativeOrZero<T extends number> =
  _Increment<`${T}`> extends infer PositiveDecrementResult extends string
    ? PositiveDecrementResult extends '0'
      ? PositiveDecrementResult
      : `-${PositiveDecrementResult}`
    : never;

export type Decrement<T extends number> = (
  isNegativeNumber<T> extends true
    ? _DecrementNegativeOrZero<GetNumberPositivePart<T>>
    : T extends 0
    ? _DecrementNegativeOrZero<T>
    : _Decrement<`${T}`>
) extends `${infer Result extends number}`
  ? Result
  : never;

const case1: Decrement<1> = 0;
const case2: Decrement<10> = 9;
const case3: Decrement<101> = 100;
const case4: Decrement<102> = 101;
const case5: Decrement<103> = 102;
const case6: Decrement<104> = 103;
const case7: Decrement<105> = 104;
const case8: Decrement<106> = 105;
const case9: Decrement<107> = 106;
const case10: Decrement<108> = 107;
const case11: Decrement<109> = 108;
const case12: Decrement<1000> = 999;
const case13: Decrement<10000000000> = 9999999999;
const case14: Decrement<0> = -1;
const case15: Decrement<-1> = -2;
const case16: Decrement<-999> = -1000;
const case17: Decrement<-99999999> = -100000000;
