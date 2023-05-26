import { Box } from "@chakra-ui/react";
import { Editor, Navbar } from "./components";
import { useState } from "react";
import { EditorContext } from "./contexts";

function App(): JSX.Element {
  const [val, setVal] = useState<string>("");
  const [prev, setPrev] = useState<boolean>(false);

  return (
    <Box w="100vw" h="100vh">
      <EditorContext.Provider value={{ val, setVal, prev, setPrev }}>
        <Navbar />
        <Editor />
      </EditorContext.Provider>
    </Box>
  );
}

export default App;
