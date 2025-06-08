import { useEffect, useState } from 'react';

export function useKeyboardNavigation() {
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Show navigation hints when Tab is pressed
      if (e.key === 'Tab') {
        setIsNavigating(true);
      }
    };

    const handleMouseDown = () => {
      setIsNavigating(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return { isNavigating };
}

export function KeyboardNavigationProvider({ children }: { children: React.ReactNode }) {
  const { isNavigating } = useKeyboardNavigation();

  return (
    <div className={isNavigating ? 'keyboard-nav-active' : ''}>
      {children}
    </div>
  );
}
