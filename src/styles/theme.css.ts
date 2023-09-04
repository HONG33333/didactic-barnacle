import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';

import { tokens } from '@styles/tokens';
import { ThemeTokens } from '@styles/types.ts';
import { getVarName } from '@styles/utils.ts';

export const breakpoints = {
  mobile: 0,
  desktop: 1024,
} as const;

/**
 * createGlobalThemeContract
 * theme interface 라고 봐도 될 듯
 * 같은 값들을 가진 새로운 테마를 생성할 때 사용하면 좋다.
 * 여러 테마 (예를 들어 light, dark)를 만들었을 때 필요한 테마만 가져올 수 있게 코드스플리팅 해준다.
 */
const { palette: colorTokens, ...restTokens } = tokens;

const colorVars = createGlobalThemeContract(colorTokens, getVarName);
createGlobalTheme(':root', colorVars, colorTokens);

const commonTokens: Omit<ThemeTokens, 'palette'> = restTokens;
const commonVars = createGlobalThemeContract(commonTokens, getVarName);
createGlobalTheme(':root', commonVars, commonTokens);

type ThemeVars = typeof commonVars & typeof colorVars;
export const theme: ThemeVars = { ...commonVars, ...colorVars };
