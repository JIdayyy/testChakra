import { Flex, useColorMode } from "@chakra-ui/react";
import React from "react";


export default function () {
  const { colorMode } = useColorMode();
  return (
    <Flex bg={colorMode === "dark" ? "gray.900" : "gray.200"} w="full" h="10%">
      FOOTER
    </Flex>
  );
}
