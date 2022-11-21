type LastIndexOf<T extends any[], U extends any> = T extends []
  ? -1
  : T extends [...infer R, infer L]
  ? L extends U
    ? R['length']
    : LastIndexOf<R, U>
  : -1;

type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2>; // 3
type Res2 = LastIndexOf<[0, 0, 0], 2>; // -1

export {};
