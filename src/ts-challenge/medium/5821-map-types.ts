type MapTypes<T, R extends { mapFrom: any; mapTo: any }> = {
  [K in keyof T]: T[K] extends R['mapFrom'] ? R['mapTo'] : T[K];
};

type StringToNumber = { mapFrom: string; mapTo: number };
type StringToDate = { mapFrom: string; mapTo: Date };
type A = MapTypes<
  { iWillBeNumberOrDate: string },
  StringToDate | StringToNumber
>; // gives { iWillBeNumberOrDate: number | Date; }

export {};
