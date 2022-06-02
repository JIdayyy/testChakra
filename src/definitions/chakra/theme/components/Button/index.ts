import { ComponentStyleConfig } from "@chakra-ui/react";

const Button: ComponentStyleConfig = {
  variants: {
    action: (props) => ({
      bg: props.colorMode === "dark" ? "blue" : "orange",
      color: "white",
      fontWeight: "bold",
      _hover: {
        bg: "gray.200",
      },
    }),
    cancel: (props) => ({
      bg: props.colorMode === "dark" ? "white" : "action.normal",
      color: props.colorMode === "dark" ? "black" : "white",
      fontWeight: "bold",
      _hover: {
        bg: "action.hover",
      },
    }),
  },
};
export default Button;
