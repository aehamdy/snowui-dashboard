import Activities from "./Activities";
import Contacts from "./Contacts";
import Notifications from "./Notifications";

function UtilitySidebar() {
  return (
    <aside className="col-span-2 flex flex-col gap-narrow p-md border-s border-s-dark-faint dark:border-s-light-soft">
      <Notifications />

      <Activities />

      <Contacts />
    </aside>
  );
}

export default UtilitySidebar;
