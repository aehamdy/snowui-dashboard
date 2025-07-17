import { useSidebar } from "../contexts/SidebarContext";
import { useUtilitiesPanel } from "../contexts/UtilitiesPanelContext";
import Sidebar from "../components/Sidebar";
import DashboardContent from "../components/DashboardContent";
import UtilitySidebar from "../components/UtilitySidebar";

function LayoutGrid() {
  const { isVisible: isSidebarVisible } = useSidebar();
  const { isVisible: isUtilityVisible } = useUtilitiesPanel();

  const sidebarColSpan = isSidebarVisible ? 2 : 0;
  const utilityColSpan = isUtilityVisible ? 2 : 0;
  const dashboardColSpan = 12 - sidebarColSpan - utilityColSpan;

  const getDashboardColClass = () => {
    switch (dashboardColSpan) {
      case 12:
        return "col-span-12";
      case 10:
        return "col-span-10";
      case 8:
        return "col-span-8";
      default:
        return "col-span-12";
    }
  };

  return (
    <main className="relative grid grid-cols-12 h-dvh text-small font-regular text-dark-primary dark:text-light-primary transition-all duration-300">
      {isSidebarVisible && (
        <div className="col-span-2 h-full absolute start-0 lg:relative bg-light-primary dark:bg-[#2a2a2a] overflow-hidden transition-all duration-300 z-20 lg:z-0">
          <Sidebar />
        </div>
      )}

      <div
        className={`${getDashboardColClass()} bg-light-primary dark:bg-[#2a2a2a] transition-all duration-300`}
      >
        <DashboardContent />
      </div>

      {isUtilityVisible && (
        <div className="col-span-2 h-full absolute end-0 lg:relative bg-light-primary dark:bg-[#2a2a2a] overflow-hidden transition-all duration-300 z-20 lg:z-0">
          <UtilitySidebar />
        </div>
      )}
    </main>
  );
}

export default LayoutGrid;
