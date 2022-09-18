import { Increment } from './number';

type _join<
  Arr extends Readonly<Array<any>>,
  Glue extends string = '',
  Index extends number = 0,
  CurrentGlue extends string = 0 extends Index ? '' : Glue,
> = Arr[Index] extends Arr['length']
  ? `${CurrentGlue}${Arr[Index]}`
  : `${CurrentGlue}${Arr[Index]}${_join<
      Arr,
      Glue,
      Increment<Index> extends number ? Increment<Index> : number
    >}`;

export type Join<Arr extends Readonly<Array<any>>, Glue extends string> = _join<
  Arr,
  Glue,
  0
>;

export type Push<Arr extends Array<any>, Item extends any> = [...Arr, Item];
export type Unshift<Arr extends Array<any>, Item extends any> = [Item, ...Arr];
export type Pop<Arr extends Array<any>> = ((...args: Arr) => void) extends (
  ...args2: [...args: any[], popped: infer Popped]
) => void
  ? Popped
  : undefined;
