type Dot<U extends string = '', V extends string = ''> = '' extends V
  ? U
  : `${U}.${V}`;

type TypeByPath<U, V extends string> = V extends keyof U
  ? U[V]
  : V extends `${infer P}.${infer K}`
  ? P extends keyof U
    ? TypeByPath<U[P], K>
    : never
  : never;

type TargetType = number | boolean | string | Date | Function;

type AllPropertiesPath<U> = U extends TargetType
  ? ''
  :
      | {
          [K in Extract<keyof U, string>]: Dot<K, AllPropertiesPath<U[K]>>;
        }[Extract<keyof U, string>]
      | Extract<keyof U, string>;
