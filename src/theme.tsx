import { createContext, ReactNode, useContext, useState } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme, Theme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Extend MUI Theme Types
declare module "@mui/material/styles" {
  interface Theme {
    shape: {
      borderRadius: {
        s: number;
        m: number;
        l: number;
        xl: number;
      };
    };
  }
  interface ThemeOptions {
    shape?: {
      borderRadius?: {
        s: number;
        m: number;
        l: number;
        xl: number;
      };
    };
  }
}

// Create Theme Context
const ThemeContext = createContext<{ toggleTheme: () => void }>({
  toggleTheme: () => {},
});

// Custom Spacing Function
const customSpacing = (factor: number) => `${factor * 10}px`;

// Define Light & Dark Themes
const getTheme = (mode: "light" | "dark"): Theme =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#1976d2" : "#90caf9",
      },
      secondary: {
        main: mode === "light" ? "#ff4081" : "#f48fb1",
      },
      background: {
        default: mode === "light" ? "#ffffff" : "#121212",
        paper: mode === "light" ? "#f5f5f5" : "#1e1e1e",
      },
      text: {
        primary: mode === "light" ? "#000000" : "#ffffff",
      },
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: 16,
    },
    shape: {
      borderRadius: {
        s: 4,
        m: 8,
        l: 12,
        xl: 16,
      },
    },
    spacing: customSpacing,
  });

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(getTheme("light"));

  const toggleTheme = () => {
    setTheme((prevTheme) => getTheme(prevTheme.palette.mode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme toggle
export const useThemeToggle = () => useContext(ThemeContext);
