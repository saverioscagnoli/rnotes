import { Dispatch, SetStateAction } from "react";
import { Button, Flex } from "@radix-ui/themes";
import "../assets/buttons.css";
import { Settings } from ".";

interface NavbarProps {
  mode: boolean;
  setMode: Dispatch<SetStateAction<boolean>>;
  preview: boolean;
  setPreview: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ mode, setMode, preview, setPreview }: NavbarProps) => {
  /* const handleModeChange = () => setMode(m => !m);
  const handlePrevChange = () => setPreview(p => !p); */

  console.log(mode);

  return (
    <Flex width="100%" p="2">
      <Flex width="100%" gap="1">
        <Button className="button" color="amber">
          sasa
        </Button>
      </Flex>
      <Flex width="100%" gap="1" justify="end">
        <Settings />
      </Flex>
    </Flex>
  );
};

export { Navbar };
