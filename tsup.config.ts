import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.ts'],
  splitting: false,
  treeshake: true,
  keepNames: true,
  clean: true,
  dts: true,
});
