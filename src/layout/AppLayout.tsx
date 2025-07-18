import { SearchPanelProvider } from "../contexts/SearchPanelProvider";
import { SidebarProvider } from "../contexts/SidebarProvider";
import { UtilitiesPanelProvider } from "../contexts/UtilitiesPanelProvider";
import LayoutGrid from "./LayoutGrid";

function AppLayout() {
  return (
    <SearchPanelProvider>
      <SidebarProvider>
        <UtilitiesPanelProvider>
          <LayoutGrid />
        </UtilitiesPanelProvider>
      </SidebarProvider>
    </SearchPanelProvider>
  );
}

export default AppLayout;
