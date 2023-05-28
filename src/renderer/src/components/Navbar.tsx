import { Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { useContext } from "react";
import { SunIcon, MoonIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import ExportMenu from "./ExportMenu";
import ShortcutsMenu from "./ShortcutsMenu";
import { EditorContext } from "@renderer/contexts";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { val, prev, setPrev } = useContext(EditorContext)!;
  const togglePreview = () => setPrev(p => !p);

  return (
    <Flex id="navbar" w="100%" h="10%" alignItems="center">
      <Flex w="100%" justifyContent="flex-start" ml="1rem" gap="0.5rem">
        <ExportMenu val={val} />
        <ShortcutsMenu />
      </Flex>
      <Flex w="100%" justifyContent="flex-end" mr="1rem" gap="0.5rem">
        <IconButton
          className="no-drag"
          aria-label="preview mode"
          icon={prev ? <ViewOffIcon /> : <ViewIcon />}
          onClick={togglePreview}
        />
        <IconButton
          className="no-drag"
          aria-label="theme-changer"
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
        />
      </Flex>
    </Flex>
  );
}

export default Navbar;
