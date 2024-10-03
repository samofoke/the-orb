import React from "react";
import { MantineProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

const MantineThemeComponent = ({ children }: { children: React.ReactNode }) => {
  const [colorTheme, setColorTheme] = useLocalStorage<"light" | "dark">({
    key: "mantine-color-theme",
    defaultValue: "light",
  });

  const toggleTheme = () => {
    setColorTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <MantineProvider defaultColorScheme={colorTheme}>
      <div
        style={{
          backgroundColor: colorTheme === "dark" ? "#333" : "#fff",
          color: colorTheme === "dark" ? "#fff" : "#000",
          padding: "2rem",
          minHeight: "100vh",
        }}
      >
        <button onClick={toggleTheme}>Toggle Theme</button>
        {children}
      </div>
    </MantineProvider>
  );
};

export default MantineThemeComponent;
