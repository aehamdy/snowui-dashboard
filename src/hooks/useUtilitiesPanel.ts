import { useContext } from "react";
import { UtilitiesPanelContext } from "../contexts/UtilitiesPanelContext";

export const useUtilitiesPanel = () => {
  const context = useContext(UtilitiesPanelContext);
  if (!context) {
    throw new Error(
      "useUtilitiesPanel must be used within UtilitiesPanelProvider"
    );
  }
  return context;
};
