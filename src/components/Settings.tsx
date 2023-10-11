import { Dialog, Flex, Button, IconButton } from "@radix-ui/themes";
import { BsGearFill } from "react-icons/bs";

const Settings = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <IconButton className="button" variant="soft" color="amber">
          <BsGearFill />
        </IconButton>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Settings</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Dialog.Description>

        <Flex direction="column" gap="3"></Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button color="amber">Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export { Settings };
