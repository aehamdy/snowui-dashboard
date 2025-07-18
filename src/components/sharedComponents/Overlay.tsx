import { useSearchPanel } from "../../hooks/useSearchPanel";
import { useSidebar } from "../../hooks/useSidebar";
import { useUtilitiesPanel } from "../../hooks/useUtilitiesPanel";

function Overlay() {
  const { isVisible: isSidebarVisible, toggle: toggleSidebar } = useSidebar();
  const { isVisible: isUtilityVisible, toggle: toggleUtilities } =
    useUtilitiesPanel();
  const { isSearchPanelOpen, closeSearchPanel } = useSearchPanel();

  return (
    (isSidebarVisible || isUtilityVisible || isSearchPanelOpen) && (
      <div
        onClick={() => {
          if (isSidebarVisible) toggleSidebar();
          if (isUtilityVisible) toggleUtilities();
          if (isSearchPanelOpen) closeSearchPanel();
        }}
        className={`${
          isSearchPanelOpen ? "lg:block" : "lg:hidden"
        } absolute top-0 start-0 w-full h-full bg-dark-secondary z-30 transition-opacity duration-300 opacity-80`}
      ></div>
    )
  );
}
export default Overlay;
