import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';

export const colors = {
  common: {
    white: '#FFFFFF',
  },
  blue: {
    main: '#1459FA',
    light: '#5F8DFA',
    light2: '#94B4FF',
    light3: '#EBF1FF',
  },
  red: {
    main: '#FA2D48',
    light: '#FA5F74',
    light2: '#FF94A2',
    light3: '#FFEBED',
  },
  grey: {
    dark: '#222222',
    main: '#616161',
    light: '#9E9E9E',
    light2: '#BDBDBD',
    light3: '#E0E0E0',
    light4: '#EEEEEE',
    light5: '#F5F5F5',
  },
  orange: {
    main: '#F97A2E',
    light: '#FA9F5F',
    light2: '#FFC094',
    light3: '#FFF3EB',
  },
} as const;

export const breakpoints = {
  mobile: 0,
  desktop: 1024,
} as const;

// theme interface 라고 봐도 될 듯
// 같은 값들을 가진 새로운 테마를 생성할 때 사용하면 좋다.
// 여러 테마 (예를 들어 light, dark)를 만들었을 때 필요한 테마만 가져올 수 있게 코드스플리팅 해준다.
export const vars = createGlobalThemeContract({
  palette: {
    common: {
      white: '',
    },
    text: {
      primary: '',
      secondary: '',
      tertiary: '',
      disabled: '',
    },
    primary: {
      dark: '',
      main: '',
      light: '',
      light2: '',
      light3: '',
      contrastText: '',
    },
    secondary: {
      dark: '',
      main: '',
      light: '',
      light2: '',
      light3: '',
      light4: '',
      light5: '',
      contrastText: '',
    },
    tertiary: {
      dark: '',
      main: '',
      light: '',
      light2: '',
      light3: '',
      contrastText: '',
    },
    quaternary: {
      dark: '',
      main: '',
      light: '',
      light2: '',
      light3: '',
      contrastText: '',
    },
    background: {
      default: '',
      paper: '',
    },
    divider: '',
    error: {
      dark: '',
      main: '',
      light: '',
    },
  },
  // ...commonVars
});

const commonVars = {
  // radius
  // spacing
  // typography
} as const;

const palette = {
  common: {
    white: colors.common.white,
  },
  text: {
    primary: colors.grey.dark,
    secondary: colors.grey.main,
    tertiary: colors.grey.light,
    disabled: colors.grey.light,
  },
  primary: {
    dark: colors.orange.main,
    main: colors.orange.main,
    light: colors.orange.light,
    light2: colors.orange.light2,
    light3: colors.orange.light3,
    contrastText: colors.common.white,
  },
  secondary: {
    dark: colors.grey.dark,
    main: colors.grey.main,
    light: colors.grey.light,
    light2: colors.grey.light2,
    light3: colors.grey.light3,
    light4: colors.grey.light4,
    light5: colors.grey.light5,
    contrastText: colors.common.white,
  },
  tertiary: {
    dark: colors.red.main,
    main: colors.red.main,
    light: colors.red.light,
    light2: colors.red.light2,
    light3: colors.red.light3,
    contrastText: colors.common.white,
  },
  quaternary: {
    dark: colors.blue.main,
    main: colors.blue.main,
    light: colors.blue.light,
    light2: colors.blue.light2,
    light3: colors.blue.light3,
    contrastText: colors.common.white,
  },
  background: {
    default: colors.grey.light5,
    paper: colors.common.white,
  },
  divider: colors.grey.light4,
  error: {
    dark: colors.red.main,
    main: colors.red.main,
    light: colors.red.light3,
  },
} as const;

export const theme = createGlobalTheme(':root', {
  palette,
  ...commonVars,
});
