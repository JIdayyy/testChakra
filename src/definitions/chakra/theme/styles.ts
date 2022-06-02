import { ThemeOverride } from "@chakra-ui/react";

type GlobalStyles = Pick<ThemeOverride, "styles">;

export default {
  styles: {
    global: {
      h1: {
        fontWeight: 500,
      },
    },
  },
  textStyles: {
    link: {
      color: "white",
      fontSize: "18px",
      cursor: "pointer",
      _hover: {
        textDecoration: "underline",
      },
    },
  },
} as GlobalStyles;
