// css 변수명 셋팅 - '.', '/' 문자열 변경
export const getVarName = (_value: string | null, path: string[]) =>
  path.join('-').replace('.', '_').replace('/', '__');
