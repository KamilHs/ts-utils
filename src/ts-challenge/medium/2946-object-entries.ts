type ObjectEntries<T> = {
  [K in keyof T]: [K & string, T[K]];
}[keyof T];

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}
type modelEntries = ObjectEntries<Model>; // ['name', string] | ['age', number] | ['locations', string[] | null];

export {};
