'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

export function MotionProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
