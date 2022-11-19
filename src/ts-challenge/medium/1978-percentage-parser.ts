type GetSign<A extends string> = A extends `${infer Sign extends
  | '+'
  | '-'}${string}`
  ? Sign
  : '';
type GetPercent<A extends string> =
  A extends `${GetSign<A>}${string}${infer Percent extends '%'}` ? Percent : '';
type GetValue<A extends string> =
  A extends `${GetSign<A>}${infer Value extends number}${GetPercent<A>}`
    ? `${Value}`
    : '';

type PercentageParser<A extends string> = [
  GetSign<A>,
  GetValue<A>,
  GetPercent<A>,
];

type PString1 = '';
type PString2 = '+85%';
type PString3 = '-85%';
type PString4 = '85%';
type PString5 = '85';

type R1 = PercentageParser<PString1>; // expected ['', '', '']
type R2 = PercentageParser<PString2>; // expected ["+", "85", "%"]
type R3 = PercentageParser<PString3>; // expected ["-", "85", "%"]
type R4 = PercentageParser<PString4>; // expected ["", "85", "%"]
type R5 = PercentageParser<PString5>; // expected ["", "85", ""]
