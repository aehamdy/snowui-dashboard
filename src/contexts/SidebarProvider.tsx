import { useState, type ReactNode } from "react";
import { SidebarContext } from "./SidebarContext";

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ isVisible, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};
