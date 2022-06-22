import { Heading, Image, VStack } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { useState, useEffect } from "react";
const Body = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [gitTheme, setGitTheme] = useState(isDark ? "tokyonight" : "default");
  //eslint-disable-next-line
  useEffect(() => {
    console.log(statsUrl);
    isDark ? setGitTheme("tokyonight") : setGitTheme("default");
  }, [colorMode]);

  const statsUrl = `https://github-readme-stats.vercel.app/api?username=sarukodes&show_icons=true&theme=${gitTheme}&hide_border=true&bg_color=${
    isDark ? "1A202C" : "FFF"
  }&hide_rank=true`;

  const streaksUrl = `https://github-readme-streak-stats.herokuapp.com/?user=sarukodes&theme=${gitTheme}&hide_border=true&background=${
    isDark ? "1A202C" : "FFF"
  }`;
  return (
    <VStack p={5}>
      <Image
        src="https://avatars.githubusercontent.com/u/102367555?v=4"
        alt="sarukoirala's github image"
        borderRadius="full"
        boxSize="90px"
      />
      <Heading
        size="lg"
        fontWeight="semibold"
        color={isDark ? "cyan.400" : "teal.400"}
      >
        Saru Koirala
      </Heading>
      <Image alt="sarukoirala's gthub stats" src={statsUrl} />

      <Image alt="sarukoirala's github streak" src={streaksUrl} />
    </VStack>
  );
};
export default Body;
