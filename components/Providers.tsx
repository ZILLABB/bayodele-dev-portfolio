"use client";

import { KeyboardNavigationProvider } from "./KeyboardNavigation";
import { MotionProvider } from "./MotionProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <KeyboardNavigationProvider>
      <MotionProvider>{children}</MotionProvider>
    </KeyboardNavigationProvider>
  );
}
