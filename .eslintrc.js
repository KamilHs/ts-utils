const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  root: true,
  plugins: ['security', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.eslint.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:security/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-console': isDev ? 'off' : 'error',
    'no-debugger': isDev ? 'off' : 'error',
    'security/detect-object-injection': 'off',
    'array-callback-return': 'off',
    'max-params': ['warn', { max: 5 }],
  },
  ignorePatterns: ['node_modules', 'dist', '.eslintrc.js'],
};
