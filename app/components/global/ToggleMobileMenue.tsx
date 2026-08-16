"use client";

import Image from "next/image";

function ToggleMobileMenue() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const target =
      e.currentTarget.closest(".grid") ||
      e.currentTarget.parentElement?.parentElement;
    if (target) {
      target.classList.toggle("activeMobileNav");
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="relative text-white hover:text-primary transition-all duration-300 lg:hidden"
    >
      <Image
        src={"/assets/icons/menu.svg"}
        alt="Open Mobile Menu"
        width={24}
        height={24}
        className="activeMobileNav:absolute activeMobileNav:opacity-0 pointer-events-none"
      />
      <Image
        src={"/assets/icons/close.svg"}
        alt="Close Mobile Menu"
        width={24}
        height={24}
        className="absolute opacity-0 activeMobileNav:static activeMobileNav:opacity-100 pointer-events-none"
      />
    </button>
  );
}

export default ToggleMobileMenue;
