import { getDictionary } from "@company/internationalization/dictionaries";
import { Container } from "./container";

export const Footer = async () => {
  const {
    footer: { label },
  } = await getDictionary("en");

  return (
    <footer className="mt-auto bg-black py-10 text-white">
      <Container>{label}</Container>
    </footer>
  );
};
