import { useState, type ReactNode } from "react";
import { SearchPanelContext } from "./SearchPanelContext";

export const SearchPanelProvider = ({ children }: { children: ReactNode }) => {
  const [isSearchPanelOpen, setIsSearchPanelOpen] = useState(false);

  const openSearchPanel = () => setIsSearchPanelOpen(true);
  const closeSearchPanel = () => setIsSearchPanelOpen(false);

  return (
    <SearchPanelContext.Provider
      value={{ isSearchPanelOpen, openSearchPanel, closeSearchPanel }}
    >
      {children}
    </SearchPanelContext.Provider>
  );
};
