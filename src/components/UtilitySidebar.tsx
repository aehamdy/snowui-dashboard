import { useUtilitiesPanel } from "../contexts/UtilitiesPanelContext";
import Activities from "./utilitiesWrapper/Activities";
import Contacts from "./utilitiesWrapper/Contacts";
import Notifications from "./utilitiesWrapper/Notifications";

function UtilitySidebar() {
  const { isVisible } = useUtilitiesPanel();

  if (!isVisible) return null;

  return (
    <aside
      className={`flex flex-col gap-narrow h-full py-lg px-md border-s border-s-dark-faint dark:border-s-light-soft ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Notifications />

      <Activities />

      <Contacts />
    </aside>
  );
}

export default UtilitySidebar;
