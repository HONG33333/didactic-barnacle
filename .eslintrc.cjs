module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "jsx-a11y", "unused-imports", "simple-import-sort", "import"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {}
    }
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "prettier/prettier": "warn",
    "unused-imports/no-unused-imports": "warn",
    "no-unused-vars": "warn",

    "simple-import-sort/exports": "warn",  // 요거 때문에 simple-import-sort 일단 유지
    "import/first": "warn", // import 는 항상 최상단에 선언되어야 한다
    "import/newline-after-import": "warn", // import 구문 후 한칸 띄우기
    "import/no-duplicates": "warn", // 같은 경로 import 중복 제거
    "import/extensions": ["warn", "ignorePackages", { // 확장자 생략 (auto fix는 안됨)
      js: "never",
      jsx: "never",
      mjs: "never",
      ts: "never",
      tsx: "never"
    }],
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        // tsconfig.json 에서 절대경로 설정하면 여기서도 셋팅이 필요하다.
        "pathGroups": [
          {
            "pattern": "{.,@}/**/*.{css,scss}",
            "group": "builtin",
            "position": "before"
          },
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "@assets/**",
            "group": "internal"
          },
          {
            "pattern": "@styles/**",
            "group": "internal",
          },
          {
            "pattern": "@components/**",
            "group": "internal"
          },
        ],
        "distinctGroup": false, // pathGroups 에서 group 지정해주어도 그룹 내부에서 개행 생기는데 false 로 해야 개행 안생김
        "pathGroupsExcludedImportTypes": [],
        // pathGroups 설정을 했음에도 불구하고 적용되지 않는 타입들을 예외 처리 - 이해 잘 안됨 - []로 해두어야 작동함...
        // react-hook-form 등 react 가 들어가는 패키지들도 지금 pathGroup 때문에 최상단으로 올라갈텐데 다른 외부 패키지들과 같은 정렬이 되고 싶으면 ["react-hook-form"] 하면 된다고 한다.
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
  },
}
/**
 * @description https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
 * @description https://github.com/import-js/eslint-plugin-import
 * @description https://jforj.tistory.com/282
 * @description https://tesseractjh.tistory.com/305
 * @description https://github.com/lydell/eslint-plugin-simple-import-sort
 */