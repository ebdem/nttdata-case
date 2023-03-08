import { ThemeOptions } from '@mui/material'

export const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#202020',
    },
    background: {
      default: '#202020',
      paper: '#202020',
    },
    grey: {
      50: '#F9F9F9',
      100: '#202020',
      200: '#E6E6E6',
      300: '#D9D9D9',
      400: '#BFBFBF',
      500: '#6A6D70',
      600: "'#8C8C8C'",
      700: '#737373',
      800: '#595959',
      900: '#404040',
    },
    text:{
      primary:"#FFFFFF",
      secondary:"#F4F5F6",
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
