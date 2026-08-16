import Link from "next/link";

interface NavLinkProps {
  title: string;
  link: string;
}

function NavLink({ title, link }: NavLinkProps) {
  return (
    <Link
      className="w-full lg:w-fit text-center xl:px-10 px-5 lg:px-4 py-4 lg:py-5 bg-transparent hover:bg-primary rounded-full transition-all duration-300 text-secondary font-urbanist text-20 font-semibold"
      href={link}
    >
      {title}
    </Link>
  );
}

export default NavLink;
