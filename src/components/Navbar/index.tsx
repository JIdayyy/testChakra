import { Button, Flex, Text, useColorMode } from "@chakra-ui/react";
import DrawerMenu from "@components/DrawerMenu";
import { theme } from "@definitions/chakra/theme";
import Link from "next/link";
import React from "react";
import navLinks from "src/config/navLinks";

export default function Navbar() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      bg={colorMode === "dark" ? "gray.900" : "gray.200"}
      shadow="lg"
      w="full"
      justifyContent="space-between"
      alignItems="center"
      px={5}
      py={5}
    >
      <DrawerMenu />
      <Flex h="full" justifyContent="space-between" w="50%">
        {navLinks.map((link) => (
          <Link href={link.link}>
            <Text textStyle="link">{link.name}</Text>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}
