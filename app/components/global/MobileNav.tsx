import NavLink from "./NavLink";

function MobileNav() {
  return (
    <div className="h-0 activeMobileNav:h-[80vh] max-h-fit overflow-y-auto   text-secondary lg:hidden transition-all duration-300 overflow-hidden">
      <div className="p-6 rounded-3xl bg-background grid gap-1.5">
        <NavLink title="Home" link="#" />
        <NavLink title="About" link="#" />
        <NavLink title="Services" link="#" />
        <NavLink title="Resume" link="#" />
        <NavLink title="Project" link="#" />
        <NavLink title="Contact" link="#" />
      </div>
    </div>
  );
}

export default MobileNav;
