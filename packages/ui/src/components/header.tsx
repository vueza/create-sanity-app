import { Dialog } from "@base-ui-components/react/dialog";
import { getDictionary } from "@company/internationalization/dictionaries";
import { Bars3 } from "../icons/bars-3";
import { Xmark } from "../icons/x-mark";
import { Button } from "./button";
import { Container } from "./container";
import { Link } from "./link";
import { MAIN_ID } from "./main";

interface HeaderProps {
  title: string;
}

export const Header = async ({ title }: HeaderProps) => {
  const {
    header: { label },
  } = await getDictionary("en");

  return (
    <header className="sticky top-0 bg-black py-5 text-white">
      <Button
        as={Link}
        href={`#${MAIN_ID}`}
        className="-left-[10000px] absolute top-auto h-[1px] w-[1px] overflow-hidden focus:top-4 focus:left-4 focus:h-auto focus:w-auto"
      >
        Skip to main content
      </Button>
      <Container className="flex items-center justify-between">
        <div>
          {label} for <span>{title}</span>
        </div>
        <Dialog.Root>
          <Dialog.Trigger aria-label="Open menu" className="p-2">
            <Bars3 />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Popup className="fixed top-0 left-0 h-full w-full overflow-y-auto bg-white p-4">
              <Dialog.Title className="sr-only">Menu</Dialog.Title>
              <Dialog.Description className="sr-only">Menu</Dialog.Description>
              <Dialog.Close aria-label="Close menu" className="p-2">
                <Xmark />
              </Dialog.Close>
              <nav aria-label="Primary navigation">
                <ul>
                  <li>
                    <a href="#1">Link 1</a>
                  </li>
                  <li>
                    <a href="#2">Link 2</a>
                  </li>
                  <li>
                    <a href="#3">Link 3</a>
                  </li>
                </ul>
              </nav>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      </Container>
    </header>
  );
};
