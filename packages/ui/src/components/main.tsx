import type { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => (
  <main id="main" tabIndex={-1}>
    {children}
  </main>
);
