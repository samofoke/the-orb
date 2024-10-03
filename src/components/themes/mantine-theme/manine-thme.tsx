import React from "react";
import { MantineProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

const MantineThemeComponent = ({ children }: { children: React.ReactNode }) => {
  const [colorTheme, setColorTheme] = useLocalStorage<"light" | "dark">({
    key: "mantine-color-theme",
    defaultValue: "light",
  });

  const toggleTheme = () => {
    setColorTheme((current) => (current === "dark" ? "dark" : "light"));
  };

  return (
    <MantineProvider defaultColorScheme={colorTheme}>
      <div>
        <button onClick={toggleTheme}>{children}</button>
      </div>
    </MantineProvider>
  );
};

export default MantineThemeComponent;
