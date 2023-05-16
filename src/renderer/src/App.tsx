import { Box } from "@chakra-ui/react";
import { Editor, Navbar } from "./components";

function App(): JSX.Element {
  return (
    <Box w="100vw" h="100vh">
      <Navbar />
      <Editor />
    </Box>
  );
}

export default App;
