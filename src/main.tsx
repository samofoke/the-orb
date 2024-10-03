import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import MantineThemeComponent from "./components/themes/mantine-theme/manine-thme.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <MantineThemeComponent>
      <StrictMode>
        <App />
      </StrictMode>
    </MantineThemeComponent>
  </MantineProvider>
);
