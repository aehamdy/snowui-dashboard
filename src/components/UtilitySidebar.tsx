import { useUtilitiesPanel } from "../contexts/UtilitiesPanelContext";
import Icon from "./sharedComponents/Icon";
import Activities from "./utilitiesWrapper/Activities";
import Contacts from "./utilitiesWrapper/Contacts";
import Notifications from "./utilitiesWrapper/Notifications";

function UtilitySidebar() {
  const { toggle: toggleUtilities } = useUtilitiesPanel();
  const { isVisible } = useUtilitiesPanel();

  if (!isVisible) return null;

  return (
    <aside
      className={`flex flex-col gap-narrow py-lg px-md border-s border-s-dark-faint dark:border-s-light-soft ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button onClick={toggleUtilities} className="lg:hidden">
        <Icon name="chevron-right" />
      </button>

      <Notifications />

      <Activities />

      <Contacts />
    </aside>
  );
}

export default UtilitySidebar;
