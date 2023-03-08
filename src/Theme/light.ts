import { ThemeOptions } from '@mui/material'

export const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#0059BC',
    },
    secondary: {
      main: '#00254F',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    grey: {
      50: '#F9F9F9',
      100: '#F4F5F6',
      200: '#E6E6E6',
      300: '#D9D9D9',
      400: '#BFBFBF',
      500: '#6A6D70',
      600: '#8C8C8C',
      700: '#737373',
      800: '#595959',
      900: '#404040',
    },
    info: {
      //?? light: will be calculated from palette.info.main for cart title background :)
      main: '#E6EEF8',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    divider: '#89919A',
    text:{
      primary:"#000000",
      secondary:"#202020",
    }
  },
}

// interface PaletteOptions {
//     primary?: PaletteColorOptions;
//     secondary?: PaletteColorOptions;
//     error?: PaletteColorOptions;
//     warning?: PaletteColorOptions;
//     info?: PaletteColorOptions;
//     success?: PaletteColorOptions;
//     mode?: PaletteMode;
//     tonalOffset?: PaletteTonalOffset;
//     contrastThreshold?: number;
//     common?: Partial<CommonColors>;
//     grey?: ColorPartial;
//     text?: Partial<TypeText>;
//     divider?: string;
//     action?: Partial<TypeAction>;
//     background?: Partial<TypeBackground>;
//     getContrastText?: (background: string) => string;
//   }
