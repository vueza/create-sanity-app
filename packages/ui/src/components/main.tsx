import type { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export const MAIN_ID = "main";

export const Main = ({ children }: MainProps) => (
  <main id={MAIN_ID} className="scroll-mt-20" tabIndex={-1}>
    {children}
  </main>
);
