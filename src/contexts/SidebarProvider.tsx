import { useState, type ReactNode } from "react";
import { SidebarContext } from "./SidebarContext";

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => setIsVisible((prev) => !prev);

  const closeSidebar = () => setIsVisible(false);

  return (
    <SidebarContext.Provider value={{ isVisible, closeSidebar, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};
