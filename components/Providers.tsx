"use client";

import { ThemeProvider } from "next-themes";
import { KeyboardNavigationProvider } from "./KeyboardNavigation";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <KeyboardNavigationProvider>
        {children}
      </KeyboardNavigationProvider>
    </ThemeProvider>
  );
}
