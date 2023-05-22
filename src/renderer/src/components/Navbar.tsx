import {
  Button,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { BsFilePdfFill } from "react-icons/bs";
import { FaMarkdown } from "react-icons/fa";

interface NavbarProps {
  val: string;
}

function Navbar({ val }: NavbarProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const onExportPDF = () => window.api.toPDF(val);
  const onExportMD = () => window.api.toMD(val);

  return (
    <Flex w="100%" h="10%" alignItems="center">
      <Flex w="100%" justifyContent="flex-start" ml="1rem">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            export
          </MenuButton>
          <MenuList>
            <MenuItem icon={<Icon as={BsFilePdfFill} />} onClick={onExportPDF}>
              as PDF
            </MenuItem>
            <MenuItem icon={<Icon as={FaMarkdown} />} onClick={onExportMD}>
              as Markdown
            </MenuItem>
          </MenuList>
        </Menu>
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
