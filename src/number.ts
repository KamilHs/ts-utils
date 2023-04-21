export type isNegativeNumber<T extends number> = `${T}` extends `-${number}`
  ? true
  : false;
