'use client';

import { ReactNode } from 'react';

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <div data-motion-provider>
      {children}
    </div>
  );
}
