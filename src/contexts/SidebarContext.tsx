import { createContext } from "react";

type SidebarContextType = {
  isVisible: boolean;
  toggle: () => void;
  closeSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);
