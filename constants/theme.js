export const COLORS = {
  primary: "#001F2D",
  secondary: "#4D626C",

  white: "#FFF",
  gray: "#74858C",

  blue: "#4036f1",
  pink: "#f48474",
  purple: "#4c1c6c",
  sky: "#64609b",
  noIdea: "#9383aa",
  brown: "#5e2e36",

  red:"#dd2d00",
  mid:"#c2d4b1",
  green:"#49a109",
};

export const SIZES = {
  xxs: 4,
  xs: 6,
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  midLarge: 21,
  extraLarge: 24,
};

export const FONTS = {
  bold: "InterBold",
  semiBold: "InterSemiBold",
  medium: "InterMedium",
  regular: "InterRegular",
  light: "InterLight",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
