import { Container } from "./container";

export const Header = () => (
  <header className="bg-black py-10 text-white">
    <a
      href="#main"
      className="-left-[10000px] absolute top-auto h-[1px] w-[1px] overflow-hidden focus:static focus:h-auto focus:w-auto" // editorconfig-checker-disable-line
    >
      Skip to main content
    </a>
    <Container>Header</Container>
  </header>
);
