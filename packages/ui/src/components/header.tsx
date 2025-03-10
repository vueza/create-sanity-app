import { Container } from "./container";

export const Header = () => (
  <header className="py-10 bg-black text-white">
    <a
      href="#main"
      className="absolute -left-[10000px] top-auto h-[1px] w-[1px] overflow-hidden focus:static focus:h-auto focus:w-auto" // editorconfig-checker-disable-line
    >
      Skip to main content
    </a>
    <Container>Header</Container>
  </header>
);
