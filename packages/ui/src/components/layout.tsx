import type { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { Main } from "./main";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);
