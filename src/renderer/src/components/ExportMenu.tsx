import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Icon, MenuButton, MenuList } from "@chakra-ui/react";
import { Menu, MenuItem } from "@chakra-ui/react";
import { BsFilePdfFill } from "react-icons/bs";
import { FaMarkdown } from "react-icons/fa";

interface ExportMenuProps {
  val: string;
}

function ExportMenu({ val }: ExportMenuProps) {
  const onExportPDF = () => window.api.toPDF(val);
  const onExportMD = () => window.api.toMD(val);

  return (
    <Menu>
      <MenuButton
        className="no-drag"
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
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
  );
}

export default ExportMenu;
