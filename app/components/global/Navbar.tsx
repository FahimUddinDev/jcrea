import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";
import ToggleMobileMenue from "./ToggleMobileMenue";

function Navbar() {
  return (
    <div className="grid gap-3">
      <div className="  flex items-center justify-between px-4 py-3 md:p-2.5 gap-5 rounded-full bg-background  w-full max-w-[1298px]  mx-auto">
        <div className="hidden lg:flex items-center gap-5">
          <NavLink link="#" title="Home" />
          <NavLink link="#" title="About" />
          <NavLink link="#" title="Services" />
        </div>
        <Link className="flex items-center gap-2.5 shrink-0" href="/">
          <Image
            src="/assets/logo.png"
            alt="Jcrea Logo"
            width={140}
            height={48}
            priority
            className="w-[100px] sm:w-[120px] md:w-[140px] h-auto object-contain"
          />
        </Link>
        <div className="hidden lg:flex items-center gap-5">
          <NavLink link="#" title="Resume" />
          <NavLink link="#" title="Project" />
          <NavLink link="#" title="Contact" />
        </div>
        <ToggleMobileMenue />
      </div>

      <MobileNav />
    </div>
  );
}

export default Navbar;
