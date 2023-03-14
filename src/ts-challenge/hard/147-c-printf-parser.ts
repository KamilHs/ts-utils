type ControlsMap = {
  c: 'char';
  s: 'string';
  d: 'dec';
  o: 'oct';
  h: 'hex';
  f: 'float';
  p: 'pointer';
};

type Parser<
  T extends string,
  K extends string[] = [],
> = T extends `${string}%${infer Key extends keyof ControlsMap}${infer Rest}`
  ? Parser<Rest, [...K, ControlsMap[Key]]>
  : K;

type case1 = Parser<'The result is %d.'>;

export {};
