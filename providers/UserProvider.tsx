"use client";

import { UserContextProvider } from "@/hooks/useUser";

interface UserProviderProps {
  children: React.ReactNode;
}


export default function UserProvider({
  children
}: UserProviderProps) {
  return (
    <UserContextProvider>
      {children}
    </UserContextProvider>
  );
}
