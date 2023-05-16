import { Editor, Navbar } from "./components";

function App(): JSX.Element {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Navbar />
      <Editor />
    </div>
  );
}

export default App;
