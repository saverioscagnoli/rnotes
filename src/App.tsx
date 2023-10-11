import { Editor, Navbar, Preview } from "./components";
import { useState, useCallback } from "react";

const App = () => {
  const [doc, setDoc] = useState<string>("# Hello world!");
  const [preview, setPreview] = useState<boolean>(false);
  const [mode, setMode] = useState<boolean>(false);
  const handleDoc = useCallback((nDoc: string) => {
    setDoc(nDoc);
  }, []);

  console.log(mode);
  return (
    <>
      <Navbar
        mode={mode}
        setMode={setMode}
        preview={preview}
        setPreview={setPreview}
      />
      {mode ? (
        preview ? (
          <Preview preview={preview} doc={doc} />
        ) : (
          <Editor doc={doc} onChange={handleDoc} mode={mode} />
        )
      ) : (
        <div style={{ display: "flex" }}>
          <Editor doc={doc} onChange={handleDoc} mode={mode} />
          <Preview preview={preview} doc={doc} />
        </div>
      )}
    </>
  );
};

export default App;
