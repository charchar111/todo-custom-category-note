import { DefaultTheme } from "styled-components";

export const pinkTheme: DefaultTheme = {
  mode: "pinkTheme",
  borderRadius: "10px",
  bgcolors: {
    main: "#eed8de",
    secondary: "#dd708e",
    point: "#BC7AF9",
  },

  colors: {
    main: "#ffffff",
    secondary: "#f1f2f6",
    point: "#F8FF95",
  },
  accentcolor: { main: "#f7d794" },

  btncolor: { main: "#dd708e", secondary: "#cf6a87" },
};

export const blueTheme: DefaultTheme = {
  mode: "blueTheme",
  borderRadius: "10px",
  bgcolors: {
    main: "#b5bfee",
    secondary: "#5160a7",
    point: "#FFCC70",
  },

  colors: {
    main: "#ffffff",
    secondary: "#f1f2f6",
    point: "#F8FF95",
  },
  accentcolor: { main: "#FFC7EA" },
  btncolor: { main: "#778beb", secondary: "#f3a683" },
};
