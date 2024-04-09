export type ThemeName = "light" | "dark";
type ColorKey = "primary" | "background" | "secondary" | "third";

interface Theme {
  name: ThemeName;
  color: {
    [key in ColorKey]: string;
  };
}

export const light: Theme = {
  name: "light",
  color: {
    primary: "brown",
    background: "lightgray",
    secondary: "blue",
    third: "green",
  },
};

export const dark: Theme = {
  name: "dark",
  color: {
    primary: "coral",
    background: "midnightblue",
    third: "darkblue",
    secondary: "darkgreen",
  },
};

export const getTheme = (themename: ThemeName): Theme => {
  switch (themename) {
    case "light":
      return light;
    case "dark":
      return dark;
  }
};
