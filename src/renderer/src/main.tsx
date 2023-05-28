import { ChakraProvider } from "@chakra-ui/react";
import { chakraTheme } from "./assets";
import ReactDOM from "react-dom/client";
import App from "./App";
import "katex/dist/katex.min.css";
import "./assets/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={chakraTheme}>
    <App />
  </ChakraProvider>
);
