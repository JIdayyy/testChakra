import { Flex } from "@chakra-ui/react";
import Footer from "@components/Footer/Footer";
import Navbar from "@components/Navbar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Flex w="100vw" h="100vh" direction="column">
      <Navbar />
      <Flex h="2000px" flexGrow={1}>
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
}
