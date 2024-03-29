import { _Increment } from './increment';
import { GetNumberPositivePart, isNegativeNumber } from './number';

type IncrementMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

type LastDigitMap = {
  10: 0;
  11: 1;
  12: 2;
  13: 3;
  14: 4;
  15: 5;
  16: 6;
  17: 7;
  18: 8;
  19: 9;
};

type SumMap = {
  0: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  2: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  3: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  4: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  5: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  6: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  7: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  8: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  9: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
};

type LastCharacter<T extends string> = T extends `${infer First}${infer Last}`
  ? Last extends ''
    ? First
    : LastCharacter<Last>
  : T;

export type _Sum<
  Num1 extends string,
  Num2 extends string,
  Carry extends 0 | 1 = 0,
  Result extends string = '',
> = Num1 extends ''
  ? Carry extends 0
    ? `${Num2}${Result}`
    : _Increment<Num2, Carry, Result>
  : Num2 extends ''
  ? Carry extends 0
    ? `${Num1}${Result}`
    : _Increment<Num1, Carry, Result>
  : LastCharacter<Num1> extends `${infer Num1LastDigit extends keyof SumMap &
      number}`
  ? LastCharacter<Num2> extends `${infer Num2LastDigit extends keyof SumMap[Num1LastDigit] &
      number}`
    ? SumMap[Num1LastDigit][Num2LastDigit] extends infer DigitsSum extends number
      ? (
          Carry extends 1 ? IncrementMap[DigitsSum] : DigitsSum
        ) extends infer DigitsSumWithCarry extends number
        ? Num1 extends `${infer Num1Rest}${Num1LastDigit}`
          ? Num2 extends `${infer Num2Rest}${Num2LastDigit}`
            ? DigitsSumWithCarry extends keyof LastDigitMap
              ? _Sum<
                  Num1Rest,
                  Num2Rest,
                  1,
                  `${LastDigitMap[DigitsSumWithCarry]}${Result}`
                >
              : _Sum<Num1Rest, Num2Rest, 0, `${DigitsSumWithCarry}${Result}`>
            : never
          : never
        : never
      : never
    : never
  : never;

export type Sum<Num1 extends number, Num2 extends number> = (
  isNegativeNumber<Num1> extends true
    ? isNegativeNumber<Num2> extends true
      ? `-${_Sum<
          `${GetNumberPositivePart<Num1>}`,
          `${GetNumberPositivePart<Num2>}`
        >}`
      : never
    : isNegativeNumber<Num2> extends true
    ? never
    : _Sum<`${Num1}`, `${Num2}`>
) extends `${infer Result extends number}`
  ? Result
  : never;

const case1: Sum<1, 9> = 10;
const case2: Sum<9, 1> = 10;
const case3: Sum<999, 0> = 999;
const case4: Sum<0, 999> = 999;
const case5: Sum<1, 999> = 1000;
const case6: Sum<999, 1> = 1000;
const case7: Sum<1188, 12> = 1200;
const case8: Sum<12, 1188> = 1200;
const case9: Sum<1988, 12> = 2000;
const case10: Sum<12, 1988> = 2000;
const case11: Sum<111111111111111, 11> = 111111111111122;
const case12: Sum<11, 111111111111111> = 111111111111122;
const case13: Sum<-1, -1> = -2;
const case14: Sum<-9999, -1> = -10000;

export {};
