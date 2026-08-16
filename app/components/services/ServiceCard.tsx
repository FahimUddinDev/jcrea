import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  image: string;
  title: string;
  link: string;
}
function ServiceCard({ image, title, link }: ServiceCardProps) {
  return (
    <Link href={link} className="bg-[rgba(104,104,104,0.2)] rounded-3xl block ">
      <h1 className="text-32 font-medium text-secondary pt-11 px-9 pb-6 border-b-2 border-[rgba(249,_250,_251,_0.3)] mb-[50px]">
        {title}
      </h1>
      <div className="relative">
        <Image src={image} alt={image} width={416} height={352} className="" />
      </div>
    </Link>
  );
}

export default ServiceCard;
