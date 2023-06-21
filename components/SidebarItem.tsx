"use client";

import { twMerge } from "tailwind-merge";
import { IconType } from "react-icons";
import Link from "next/link";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}
export default function SidebarItem({
  icon: Icon,
  label,
  active,
  href
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={twMerge(`
        flex
        h-auto
        items-center
        gap-x-4
        w-full
        text-md
        font-medium
        cursor-pointer
        hover:text-white
        transition
        text-neutral-400
        py-1
      `,
        active && "text-white"
      )}
    >
      <Icon size={26} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
}
