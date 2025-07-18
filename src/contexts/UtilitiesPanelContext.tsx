import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type UtilitiesPanelContextType = {
  isVisible: boolean;
  toggle: () => void;
};

const UtilitiesPanelContext = createContext<
  UtilitiesPanelContextType | undefined
>(undefined);

export const useUtilitiesPanel = () => {
  const context = useContext(UtilitiesPanelContext);
  if (!context) {
    throw new Error(
      "useUtilitiesPanel must be used within UtilitiesPanelProvider"
    );
  }
  return context;
};

export const UtilitiesPanelProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible((prev) => !prev);

  return (
    <UtilitiesPanelContext.Provider value={{ isVisible, toggle }}>
      {children}
    </UtilitiesPanelContext.Provider>
  );
};
