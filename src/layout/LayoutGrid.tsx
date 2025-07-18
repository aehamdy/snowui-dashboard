import { useSidebar } from "../contexts/SidebarContext";
import { useUtilitiesPanel } from "../contexts/UtilitiesPanelContext";
import Sidebar from "../components/Sidebar";
import DashboardContent from "../components/DashboardContent";
import UtilitySidebar from "../components/UtilitySidebar";
import { useEffect } from "react";

function LayoutGrid() {
  const { isVisible: isSidebarVisible, toggle: toggleSidebar } = useSidebar();
  const { isVisible: isUtilityVisible, toggle: toggleUtilities } =
    useUtilitiesPanel();

  const sidebarColSpan = isSidebarVisible ? 2 : 0;
  const utilityColSpan = isUtilityVisible ? 2 : 0;
  const dashboardColSpan = 12 - sidebarColSpan - utilityColSpan;

  console.log({
    sidebar: sidebarColSpan,
    utility: utilityColSpan,
    dashboard: dashboardColSpan,
  });

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
      {(isSidebarVisible || isUtilityVisible) && (
        <div
          onClick={() => {
            if (isSidebarVisible) toggleSidebar();
            if (isUtilityVisible) toggleUtilities();
          }}
          className="lg:hidden absolute top-0 start-0 w-full h-full bg-dark-secondary z-30 transition-opacity duration-300 opacity-80"
        ></div>
      )}

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
