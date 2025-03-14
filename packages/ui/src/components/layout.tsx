import type { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { Main } from "./main";

interface LayoutProps {
  children: ReactNode;
  title: string;
}

export const Layout = ({ children, title }: LayoutProps) => (
  <>
    <Header title={title} />
    <Main>{children}</Main>
    <Footer />
  </>
);
