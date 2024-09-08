import Link from "next/link";
import { HomeIcon } from "@radix-ui/react-icons";

const Logo = () => {
  return (
    <Link href="/" className="relative transition-all">
      <HomeIcon
        width="28"
        height="28"
        className="text-lg font-bold dark:text-slate-300 text-gray-900 hover:text-primary dark:hover:text-primary transition-all"
      />
    </Link>
  );
};

export default Logo;
