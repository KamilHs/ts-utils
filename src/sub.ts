import { _Decrement } from './decrement';

type DecrementMap = {
  '-9': -10;
  '-8': -9;
  '-7': -8;
  '-6': -7;
  '-5': -6;
  '-4': -5;
  '-3': -4;
  '-2': -3;
  '-1': -2;
  '0': -1;
  '1': 0;
  '2': 1;
  '3': 2;
  '4': 3;
  '5': 4;
  '6': 5;
  '7': 6;
  '8': 7;
  '9': 8;
};

type NegativeCarryMap = {
  '-10': 0;
  '-9': 1;
  '-8': 2;
  '-7': 3;
  '-6': 4;
  '-5': 5;
  '-4': 6;
  '-3': 7;
  '-2': 8;
  '-1': 9;
};

type SubMap = {
  0: [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
  1: [1, 0, -1, -2, -3, -4, -5, -6, -7, -8];
  2: [2, 1, 0, -1, -2, -3, -4, -5, -6, -7];
  3: [3, 2, 1, 0, -1, -2, -3, -4, -5, -6];
  4: [4, 3, 2, 1, 0, -1, -2, -3, -4, -5];
  5: [5, 4, 3, 2, 1, 0, -1, -2, -3, -4];
  6: [6, 5, 4, 3, 2, 1, 0, -1, -2, -3];
  7: [7, 6, 5, 4, 3, 2, 1, 0, -1, -2];
  8: [8, 7, 6, 5, 4, 3, 2, 1, 0, -1];
  9: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
};
type LastCharacter<T extends string> = T extends `${infer First}${infer Last}`
  ? Last extends ''
    ? First
    : LastCharacter<Last>
  : T;

type _Sub<
  Num1 extends string,
  Num2 extends string,
  NegativeCarry extends 0 | 1 = 0,
  Result extends string = '',
> = Num2 extends ''
  ? NegativeCarry extends 0
    ? `${Num1}${Result}`
    : _Decrement<Num1, Result>
  : LastCharacter<Num1> extends `${infer Num1LastDigit extends keyof SubMap &
      number}`
  ? LastCharacter<Num2> extends `${infer Num2LastDigit extends keyof SubMap[Num1LastDigit] &
      number}`
    ? `${SubMap[Num1LastDigit][Num2LastDigit]}` extends infer DigitsSub extends keyof DecrementMap
      ? (
          NegativeCarry extends 1 ? `${DecrementMap[DigitsSub]}` : DigitsSub
        ) extends infer DigitsSubWithCarry extends string
        ? Num1 extends `${infer Num1Rest}${Num1LastDigit}`
          ? Num2 extends `${infer Num2Rest}${Num2LastDigit}`
            ? DigitsSubWithCarry extends keyof NegativeCarryMap
              ? _Sub<
                  Num1Rest,
                  Num2Rest,
                  1,
                  `${NegativeCarryMap[DigitsSubWithCarry]}${Result}`
                >
              : _Sub<Num1Rest, Num2Rest, 0, `${DigitsSubWithCarry}${Result}`>
            : never
          : never
        : never
      : never
    : never
  : never;

type _RemoveLeadingZeros<T extends string> =
  T extends `0${infer Rest extends string}`
    ? Rest extends ''
      ? T
      : _RemoveLeadingZeros<Rest>
    : T;

type Sub<Num1 extends number, Num2 extends number> = _RemoveLeadingZeros<
  _Sub<`${Num1}`, `${Num2}`>
> extends `${infer Result extends number}`
  ? Result
  : never;

type Case1 = Sub<10, 9>;
type Case2 = Sub<9, 1>;
type Case3 = Sub<100, 29>;
type Case4 = Sub<1000, 999>;
type Case5 = Sub<1000, 0>;
type Case6 = Sub<1000, 1>;
type Case7 = Sub<1200, 12>;
type Case8 = Sub<111111111111111, 111>;
type Case9 = Sub<111, 111>;
type Case10 = Sub<100000, 99998>;

export {};
