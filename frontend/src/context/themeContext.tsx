import { createContext, useState } from "react";

export type THEME = "default";  

export type THEME_CONTEXT = {
  theme: THEME
};

export const ThemeContext = createContext<THEME_CONTEXT | null>(null);

export function ThemesProvider({ children }: { children: React.ReactNode }) {
  const [theme] = useState<THEME>("default"); 


  return (
    <ThemeContext.Provider value={{theme}}>
      {children}
    </ThemeContext.Provider>
  );
}
