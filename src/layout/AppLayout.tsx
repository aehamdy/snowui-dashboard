import { SidebarProvider } from "../contexts/SidebarContext";
import { UtilitiesPanelProvider } from "../contexts/UtilitiesPanelContext";
import LayoutGrid from "./LayoutGrid";

function AppLayout() {
  return (
    <SidebarProvider>
      <UtilitiesPanelProvider>
        <LayoutGrid />
      </UtilitiesPanelProvider>
    </SidebarProvider>
  );
}

export default AppLayout;
