type Split<Str extends string, Del extends string> = string extends Str
  ? string[]
  : '' extends Str
  ? []
  : Str extends `${infer T}${Del}${infer U}`
  ? [T, ...Split<U, Del>]
  : [Str];

export {};
