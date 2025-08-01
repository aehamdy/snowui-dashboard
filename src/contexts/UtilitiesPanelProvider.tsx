import { useState, type ReactNode } from "react";
import { UtilitiesPanelContext } from "./UtilitiesPanelContext";

export const UtilitiesPanelProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => setIsVisible((prev) => !prev);

  const closeUtilitiesPanel = () => setIsVisible(false);

  return (
    <UtilitiesPanelContext.Provider
      value={{ isVisible, closeUtilitiesPanel, toggle }}
    >
      {children}
    </UtilitiesPanelContext.Provider>
  );
};
