"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  link: string;
}

function ServiceCard({ image, title, link }: ServiceCardProps) {
  const rawId = useId();
  const clipId = `service-card-clip-${rawId.replace(/[:]/g, "")}`;

  const [isMd, setIsMd] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsMd(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsMd(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const r = 0.06;
  const rCenter = isMd ? 0.15 : 0.1;
  const notchX = isMd ? 0.69 : 0.77;
  const notchY = isMd ? 0.75 : 0.81;

  const d = `
    M ${r},0
    L ${1 - r},0
    A ${r} ${r} 0 0 1 1,${r}
    L 1,${notchY - r}
    A ${r} ${r} 0 0 1 ${1 - r},${notchY}
    L ${notchX + rCenter},${notchY}
    A ${rCenter} ${rCenter} 0 0 0 ${notchX},${notchY + rCenter}
    L ${notchX},${1 - r}
    A ${r} ${r} 0 0 1 ${notchX - r},1
    L ${r},1
    A ${r} ${r} 0 0 1 0,${1 - r}
    L 0,${r}
    A ${r} ${r} 0 0 1 ${r},0
    Z
  `;

  const s = (v: number) => +(v * 100).toFixed(3);
  const dBorder = `
    M ${s(r)},0
    L ${s(1 - r)},0
    A ${s(r)} ${s(r)} 0 0 1 100,${s(r)}
    L 100,${s(notchY - r)}
    A ${s(r)} ${s(r)} 0 0 1 ${s(1 - r)},${s(notchY)}
    L ${s(notchX + rCenter)},${s(notchY)}
    A ${s(rCenter)} ${s(rCenter)} 0 0 0 ${s(notchX)},${s(notchY + rCenter)}
    L ${s(notchX)},${s(1 - r)}
    A ${s(r)} ${s(r)} 0 0 1 ${s(notchX - r)},100
    L ${s(r)},100
    A ${s(r)} ${s(r)} 0 0 1 0,${s(1 - r)}
    L 0,${s(r)}
    A ${s(r)} ${s(r)} 0 0 1 ${s(r)},0
    Z
  `;

  return (
    <div className="px-0.5 pb-14">
      <Link href={link} className=" block relative group">
        <div
          style={{ clipPath: `url(#${clipId})` }}
          className="bg-[rgba(104,104,104,0.2)]"
        >
          <svg width="0" height="0" className="absolute ">
            <defs>
              <clipPath id={clipId} clipPathUnits="objectBoundingBox">
                <path d={d} />
              </clipPath>
            </defs>
          </svg>

          <h1 className="text-32 font-medium text-secondary pt-11 px-9 pb-6 border-b-2 border-[rgba(249,250,251,0.3)] mb-[50px]">
            {title}
          </h1>

          <div className="relative">
            <Image
              src={image}
              alt={title}
              width={416}
              height={352}
              className="w-full h-auto"
            />
          </div>
        </div>

        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <path
            d={dBorder}
            fill="none"
            stroke="rgba(249, 250, 251, 0.3)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="absolute bottom-0 right-0 size-20 md:size-[114px] bg-[#1D2939] rounded-full flex items-center justify-center">
          <Image
            src="/assets/icons/up-right.svg"
            alt="arrow"
            width={72}
            height={72}
            className="size-[50px] md:size-[72px] group-hover:rotate-45 transition-all duration-300 ease-in-out"
          />
        </div>
      </Link>
    </div>
  );
}

export default ServiceCard;
