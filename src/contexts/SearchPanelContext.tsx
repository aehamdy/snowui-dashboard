import { createContext } from "react";

type SearchPanelContextType = {
  isSearchPanelOpen: boolean;
  openSearchPanel: () => void;
  closeSearchPanel: () => void;
};

export const SearchPanelContext = createContext<
  SearchPanelContextType | undefined
>(undefined);
