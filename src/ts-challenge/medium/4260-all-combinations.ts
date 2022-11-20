type StringToUnion<S extends string> = S extends `${infer C}${infer R}`
  ? C | StringToUnion<R>
  : never;

type AllCombinations<T extends string, U extends string = StringToUnion<T>> = [
  T,
] extends [never]
  ? ''
  :
      | {
          [K in U]: K | `${K}${AllCombinations<Exclude<U, K>>}`;
        }[U]
      | '';

type AllCombinations_ABC = AllCombinations<'ABC'>;
// should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'
