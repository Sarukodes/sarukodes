import type { NextPage } from "next";
import { IconButton } from "@chakra-ui/button";
import { Flex, Heading, Spacer, VStack } from "@chakra-ui/react";
import { FaSun, FaMoon, FaFacebook, FaGithub } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/color-mode";
const Header: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const redirectToGithub = () => {
    window.open("https://github.com/sarukodes", "_blank");
  };

  const redirectToFacebook = () => {
    window.open("https://www.facebook.com/saru.koirala.", "_blank");
  };

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="4" size="md" fontWeight="semibold" color="teal.400">
          sarukodes
        </Heading>

        <Spacer></Spacer>
        <IconButton
          ml={1}
          aria-label="github"
          icon={<FaGithub />}
          isRound={true}
          onClick={redirectToGithub}
        ></IconButton>
        <IconButton
          ml={1}
          aria-label="instagram"
          icon={<FaFacebook />}
          isRound={true}
          onClick={redirectToFacebook}
        ></IconButton>
        <IconButton
          ml={8}
          aria-label="themeToggler"
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound={true}
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
    </VStack>
  );
};
export default Header;
