import { Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import ExportMenu from "./ExportMenu";
import ShortcutsMenu from "./ShortcutsMenu";

interface NavbarProps {
  val: string;
}

function Navbar({ val }: NavbarProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex w="100%" h="10%" alignItems="center">
      <Flex w="100%" justifyContent="flex-start" ml="1rem" gap="0.5rem">
        <ExportMenu val={val} />
        <ShortcutsMenu />
      </Flex>
      <Flex w="100%" justifyContent="flex-end" mr="1rem">
        <IconButton
          aria-label="theme-changer"
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
        />
      </Flex>
    </Flex>
  );
}

export default Navbar;
