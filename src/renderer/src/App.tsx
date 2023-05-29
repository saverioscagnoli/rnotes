import { Box } from "@chakra-ui/react";
import { Editor, Preview } from "./pages";
import { useEffect, useRef, useState } from "react";
import { EditorContext } from "./contexts";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ReactCodeMirrorRef } from "@uiw/react-codemirror";

function App(): JSX.Element {
  const [val, setVal] = useState<string>("");
  const [prev, setPrev] = useState<boolean>(false);
  const editorRef = useRef<ReactCodeMirrorRef>(null);

  const toggle = () => setPrev(p => !p);

  useEffect(() => {
    addEventListener("keydown", e => {
      if (!e.ctrlKey && !e.metaKey) return;
      if (e.key === "p") {
        e.preventDefault();
        toggle();
      }
    });
  }, []);

  return (
    <EditorContext.Provider value={{ editorRef, val, setVal, prev, setPrev }}>
      <Box w="100vw" h="100vh">
        <HashRouter>
          <Routes>
            <Route index path="/" element={<Editor />} />
            <Route path="preview" element={<Preview />} />
          </Routes>
        </HashRouter>
      </Box>
    </EditorContext.Provider>
  );
}

export default App;
