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

type Case1 = Decrement<1>;
type Case2 = Decrement<10>;
type Case3 = Decrement<101>;
type Case4 = Decrement<102>;
type Case5 = Decrement<103>;
type Case6 = Decrement<104>;
type Case7 = Decrement<105>;
type Case8 = Decrement<106>;
type Case9 = Decrement<107>;
type Case10 = Decrement<108>;
type Case11 = Decrement<109>;
type Case12 = Decrement<1000>;
type Case13 = Decrement<10000000000>;
type Case14 = Decrement<0>;
type Case15 = Decrement<-1>;
type Case16 = Decrement<-999>;
type Case17 = Decrement<-99999999>;
