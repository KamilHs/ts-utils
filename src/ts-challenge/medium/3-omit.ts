interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyOmit<T, U> = {
  [K in Exclude<keyof T, U>]: T[K];
};

type TodoPreview = MyOmit<Todo, 'description' | 'title'>;

const todo: TodoPreview = {
  completed: false,
};

export {};
