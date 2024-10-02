import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer"></AlignJustify>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{""}</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
            />
          </div>
          <Socials
            isAnimate={false}
            containerStyles="flex gap-x-4"
            iconsStyles="text-2xl"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
