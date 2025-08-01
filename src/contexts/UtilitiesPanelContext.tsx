import { createContext } from "react";

type UtilitiesPanelContextType = {
  isVisible: boolean;
  toggle: () => void;
  closeUtilitiesPanel: () => void;
};

export const UtilitiesPanelContext = createContext<
  UtilitiesPanelContextType | undefined
>(undefined);
