import FavoritesList from "./FavoritesList";
import SidebarNavigation from "./SidebarNavigation";
import SidebarTabs from "./SidebarTabs";
import UserInfo from "./UserInfo";

function Sidebar() {
  return (
    <aside className="col-span-2 flex flex-col gap-narrow p-lg text-small font-regular text-dark-primary dark:text-light-primary border-e-dark-faint dark:border-e-light-soft">
      <UserInfo />

      <SidebarTabs />

      <FavoritesList />

      <SidebarNavigation />
    </aside>
  );
}

export default Sidebar;
