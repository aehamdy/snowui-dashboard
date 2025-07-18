import { useContext } from "react";
import { SearchPanelContext } from "../contexts/SearchPanelContext";

export const useSearchPanel = () => {
  const context = useContext(SearchPanelContext);

  if (!context) {
    throw new Error("useSearchPanel must be used within SearchPanelProvider");
  }
  return context;
};
