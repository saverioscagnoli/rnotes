import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, MenuButton, MenuList } from "@chakra-ui/react";
import { Menu, MenuItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function ShortcutsMenu() {
  const [k, setK] = useState<string>("");

  useEffect(() => {
    setK(window.api.getOs() === "darwin" ? "⌘" : "ctrl");
  }, []);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        shortcuts
      </MenuButton>
      <MenuList>
        <MenuItem command={`${k}+b`}>
          <strong>bold</strong>
        </MenuItem>
        <MenuItem command={`${k}+i`}>
          <i>italic</i>
        </MenuItem>
        <MenuItem command={`${k}+n`}>inline math</MenuItem>
        <MenuItem command={`${k}+m`}>block math</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default ShortcutsMenu;
