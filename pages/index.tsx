import React from "react";
import {
  Button,
  Center,
  Flex,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import SuperModal from "@components/Modals/SuperModal";

const Home: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleToggleTheme = () => {
    toggleColorMode();
  };

  return (
    <Center w="full" h="full">
      <Text fontSize={50} fontWeight="bold">
        MON SUPER TITRE
      </Text>
    </Center>
  );
};

export default Home;
