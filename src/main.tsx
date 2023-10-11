import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Theme appearance="dark">
    <App />
  </Theme>
);
