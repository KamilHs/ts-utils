type Remap<T> = T extends infer R
  ? {
      [P in keyof R]: R[P];
    }
  : never;

declare function SimpleVue<
  D extends () => Record<string, unknown>,
  C extends Record<string, () => any> & ThisType<D>,
  M extends Record<string, () => any> & ThisType<D>,
>(options: {
  data: D;
  computed: C;
  methods: M;
}): Remap<
  ReturnType<D> & {
    [K in keyof C]: ReturnType<C[K]>;
  } & M
>;

const instance = SimpleVue({
  data() {
    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    } as const;
  },
  computed: {
    fullname() {
      return this.firstname + ' ' + this.lastname;
    },
  },
  methods: {
    hi() {
      alert(this.fullname.toLowerCase());
    },
  },
} as const);
