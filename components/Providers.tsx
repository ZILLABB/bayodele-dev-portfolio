"use client";

import { ThemeProvider } from "next-themes";
import { KeyboardNavigationProvider } from "./KeyboardNavigation";
import { MotionProvider } from "./MotionProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <KeyboardNavigationProvider>
        <MotionProvider>{children}</MotionProvider>
      </KeyboardNavigationProvider>
    </ThemeProvider>
  );
}
