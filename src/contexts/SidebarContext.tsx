import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type SidebarContextType = {
  isVisible: boolean;
  toggle: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ isVisible, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};
