import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./assets";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
