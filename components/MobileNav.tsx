import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
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
        <div className="flex flex-col items-centerhap-v-6">
          <div className="">
            <Logo />
            <Nav
              containerStyles="flex flex-col item-center gap-v-6"
              linkStyles="text-2xk"
            />
            <Socials
              containerStyles="flex flex-col item-center gap-v-6"
              iconsStyles="text-2xk"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
