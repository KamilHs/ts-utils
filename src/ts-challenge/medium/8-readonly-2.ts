interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyReadonly2<T, K = never> = K extends never
  ? Readonly<T>
  : {
      [P in Exclude<keyof T, K>]: T[P];
    } & {
      readonly [P in Extract<keyof T, K>]: T[P];
    };

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false,
};

// todo.title = 'Hello'; // Error: cannot reassign a readonly property
// todo.description = 'barFoo'; // Error: cannot reassign a readonly property
// todo.completed = true; // OK

export {};
