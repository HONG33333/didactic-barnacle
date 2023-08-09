module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    // eslint-config-prettier, eslint-plugin-prettier 의 설정 둘다 적용 되는 extends - 다른 플러그인들과 prettier 의 겹치를 설정 제거 후 prettier 설정 적용 (맨 마지막에 적용)
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'jsx-a11y', 'unused-imports', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': 'warn',
    'unused-imports/no-unused-imports': 'warn',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'no-unused-vars': 'warn',
  },
}
