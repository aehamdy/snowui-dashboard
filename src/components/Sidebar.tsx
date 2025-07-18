import { useSidebar } from "../contexts/SidebarContext";
import FavoritesList from "./sidebarWrapper/FavoritesList";
import SidebarNavigation from "./sidebarWrapper/SidebarNavigation";
import SidebarTabs from "./sidebarWrapper/SidebarTabs";
import UserInfo from "./sidebarWrapper/UserInfo";

function Sidebar() {
  const { isVisible } = useSidebar();

  if (!isVisible) return null;

  return (
    <aside
      className={`flex flex-col gap-narrow h-full py-lg px-md border-e border-e-dark-faint dark:border-e-light-soft ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <UserInfo />

      <SidebarTabs />

      <FavoritesList />

      <SidebarNavigation />
    </aside>
  );
}

export default Sidebar;
