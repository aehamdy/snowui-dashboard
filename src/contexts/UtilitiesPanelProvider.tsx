import { useState, type ReactNode } from "react";
import { UtilitiesPanelContext } from "./UtilitiesPanelContext";

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
