"use client";

import { usePathname } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import SidebarItem from "./SidebarItem";
import { HiHome } from "react-icons/hi";
import { useMemo } from "react";
import Box from "./Box";
import Library from "./Library";

interface SidebarProps {
  children: React.ReactNode;
}

export default function Sidebar({
  children
}: SidebarProps) {
  const pathname = usePathname();
  const routes = useMemo(() => [
    {
      icon: HiHome,
      label: "Home",
      active: pathname !== "/search",
      href: "/"
    },
    {
      icon: BiSearch,
      label: "Search",
      active: pathname === "/search",
      href: "/search"
    }
  ], [pathname]);
  return (
    <div className="flex h-full">
      <div className="
        hidden
        md:flex
        flex-col
        gap-y-2
        bg-black
        h-full
        w-[300px]
        p-2
      ">
        <Box>
          <div className="
            flex
            flex-col
            gap-y-4
            px-5
            py-4
          ">
            {routes.map((item) => (
              <SidebarItem
                key={item.label}
                {...item}
              />
            ))}
          </div>
        </Box>
        <Box className="
          overflow-y-auto
          h-full
        ">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overlflow-y-auto py-2">
        {children}
      </main>
    </div>
  );
}
