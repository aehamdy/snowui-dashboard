import { createContext } from "react";

type SidebarContextType = {
  isVisible: boolean;
  toggle: () => void;
};

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);
