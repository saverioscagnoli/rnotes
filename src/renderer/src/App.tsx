import { Box } from "@chakra-ui/react";
import { Editor, Navbar } from "./components";
import { useEditor } from "./hooks";

function App(): JSX.Element {
  const eProps = useEditor();

  return (
    <Box w="100vw" h="100vh">
      <Navbar val={eProps.val} />
      <Editor {...eProps} />
    </Box>
  );
}

export default App;
