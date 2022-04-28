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
    secondary: "#81E6D9", //teal.200
    tertiary: "#4FD1C5", //teal.300
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
