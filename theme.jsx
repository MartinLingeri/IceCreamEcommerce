import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "RGBA(0, 0, 0, 0.06)",
        color: "white",
      },
    },
  },
  colors: {
    primary: "#38B2AC", //teal.400
    secondary: "#156662", //darker teal
    tertiary: "#69FFF7", //lighter teal
    fourth: "#B36237", //brown
    fifth: "#662A0B", //darker brown
    warning: "#C53030", //red.600
  },
  Button: {
    baseStyle: {
      boxShadow: "sm",
    },
    variants: {
      potes: {
        bg: "teal.100",
      },
      realizarPedido: {
        bg: "teal.400"
      }
    },
  },
});
