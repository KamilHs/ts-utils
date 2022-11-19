type PartialByKeys<T, K extends keyof T = keyof T> = Omit<T, K> & {
  [P in K]?: T[P];
} extends infer R
  ? {
      [P in keyof R]: R[P];
    }
  : never;

interface User {
  name: string;
  age: number;
  address: string;
}

type UserPartialName = PartialByKeys<User, 'name'>; // { name?:string; age:number; address:string }

export {};
