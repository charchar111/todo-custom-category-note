import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: string;
    borderRadius: string;
    bgcolors: {
      main: string;
      secondary: string;
      point: string;
    };

    colors: {
      main: string;
      secondary: string;
      point: string;
    };
    accentcolor: { main: string };

    btncolor: { main: string; secondary: string };
  }
}
