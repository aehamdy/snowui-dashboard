import FavoritesList from "./FavoritesList";
import SidebarNavigation from "./SidebarNavigation";
import SidebarTabs from "./SidebarTabs";
import UserInfo from "./UserInfo";

function Sidebar() {
  return (
    <aside className="col-span-2 flex flex-col gap-narrow p-lg border border-e-dark-faint dark:border-e-light-soft">
      <UserInfo />

      <SidebarTabs />

      <FavoritesList />

      <SidebarNavigation />
    </aside>
  );
}

export default Sidebar;
