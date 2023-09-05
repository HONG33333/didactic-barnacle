// css 변수명 셋팅 - '.', '/' 문자열 변경

export const getVarName = (_value: string | null, path: string[]) =>
  path.join('-').replace('.', '_').replace('/', '__');

// 팔레트 평탄화 함수
/* eslint-disable @typescript-eslint/no-explicit-any */
export const flattenPaletteObj = (
  paletteObj: Record<string, any>,
  prefix: string = '',
) => {
  const flattenedPalette: Record<string, string> = {};

  for (const key in paletteObj) {
    const value = paletteObj[key];
    const newKey = `${prefix ? `${prefix}.` : ''}${key}`;

    if (typeof value === 'object') {
      const nestedFlattened = flattenPaletteObj(value, newKey);
      Object.assign(flattenedPalette, nestedFlattened);
    } else {
      flattenedPalette[newKey] = value;
    }
  }

  return flattenedPalette;
};
