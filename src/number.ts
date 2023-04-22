export type isNegativeNumber<T extends number> = `${T}` extends `-${number}`
  ? true
  : false;

export type GetNumberPositivePart<T extends number> =
  `${T}` extends `-${infer PositiveT extends number}` ? PositiveT : never;
