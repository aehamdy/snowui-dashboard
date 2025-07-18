import Sidebar from "../components/Sidebar";
import DashboardContent from "../components/DashboardContent";
import UtilitySidebar from "../components/UtilitySidebar";
import { useEffect } from "react";
import SearchPanel from "../components/sharedComponents/SearchPanel";
import { useSearchPanel } from "../hooks/useSearchPanel";
import { useSidebar } from "../hooks/useSidebar";
import { useUtilitiesPanel } from "../hooks/useUtilitiesPanel";
import Overlay from "../components/sharedComponents/Overlay";

function LayoutGrid() {
  const { isVisible: isSidebarVisible, toggle: toggleSidebar } = useSidebar();
  const { isVisible: isUtilityVisible, toggle: toggleUtilities } =
    useUtilitiesPanel();
  const { isSearchPanelOpen, closeSearchPanel } = useSearchPanel();

  const sidebarColSpan = isSidebarVisible ? 2 : 0;
  const utilityColSpan = isUtilityVisible ? 2 : 0;
  const dashboardColSpan = 12 - sidebarColSpan - utilityColSpan;

  const getDashboardColClass = () => {
    switch (dashboardColSpan) {
      case 12:
        return "col-span-12";
      case 10:
        return "col-span-12 lg:col-span-10";
      case 8:
        return "col-span-12 lg:col-span-8";
      default:
        return "col-span-12";
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isSidebarVisible) toggleSidebar();
        if (isUtilityVisible) toggleUtilities();
        if (isSearchPanelOpen) closeSearchPanel();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
  }, [isSidebarVisible, isUtilityVisible]);

  useEffect(() => {
    const isSmallScreen = window.innerWidth < 1024;

    if (isSmallScreen && (isSidebarVisible || isUtilityVisible)) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isSidebarVisible, isUtilityVisible]);

  return (
    <main className="relative grid grid-cols-12 h-dvh text-small font-regular text-dark-primary dark:text-light-primary transition-all duration-300">
      <Overlay />

      <SearchPanel />

      {isSidebarVisible && (
        <div
          className={`absolute lg:relative col-span-2 h-full top-0 start-0 bg-light-primary dark:bg-[#2a2a2a] z-40 lg:z-0`}
        >
          <Sidebar />
        </div>
      )}

      <div
        className={`${getDashboardColClass()} bg-light-primary dark:bg-[#2a2a2a] transition-all duration-300`}
      >
        <DashboardContent />
      </div>

      {isUtilityVisible && (
        <div className="absolute lg:relative col-span-2 h-full top-0 end-0 bg-light-primary dark:bg-[#2a2a2a] z-40 lg:z-0">
          <UtilitySidebar />
        </div>
      )}
    </main>
  );
}

export default LayoutGrid;
