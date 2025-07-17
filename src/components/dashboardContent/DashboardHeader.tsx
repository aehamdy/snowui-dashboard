import { useSidebar } from "../../contexts/SidebarContext";
import { useUtilitiesPanel } from "../../contexts/UtilitiesPanelContext";
import Icon from "../sharedComponents/Icon";

function DashboardHeader() {
  const { toggle: toggleSidebar } = useSidebar();
  const { toggle: toggleUtilities } = useUtilitiesPanel();

  return (
    <header className="flex justify-between items-center py-md px-xl border-b border-b-dark-faint dark:border-b-light-soft">
      <div className="flex items-center gap-lg">
        <div className="flex items-center gap-sm">
          <button
            onClick={toggleSidebar}
            className="p-[6.5px] hover:text-dark-tertiary hover:dark:text-light-tertiary duration-300"
          >
            <Icon name="sidebar" className="" />
          </button>

          <button className="p-[6.5px] hover:text-dark-tertiary hover:dark:text-light-tertiary duration-300">
            <Icon name="star" className="" />
          </button>
        </div>

        <div className="flex items-center gap-md">
          <button className="text-dark-tertiary hover:text-dark-secondary dark:text-light-tertiary">
            Dashboard
          </button>

          <span className="text-dark-tertiary dark:text-light-tertiary">/</span>

          <button className="hover:text-dark-tertiary hover:dark:text-light-secondary">
            Default
          </button>
        </div>
      </div>

      <div className="flex items-center gap-spaced">
        <div className="">
          <label
            htmlFor="search-input"
            className="flex max-w-[160px] py-xs px-sm text-dark-muted dark:text-light-tertiary bg-dark-faint dark:bg-light-soft rounded-regular overflow-hidden"
          >
            <Icon name="magnifying-glass" className="me-1" />
            <input
              type="text"
              name=""
              id="search-input"
              placeholder="Search"
              className="w-full text-dark-muted dark:text-light-tertiary placeholder-dark-muted dark:placeholder-light-tertiary outline-none"
            />

            <span className="flex items-center px-2 text-[10px] text-dark-muted dark:text-light-tertiary dark:bg-dark-low border border-dark-low rounded-small">
              /
            </span>
          </label>
        </div>

        <div className="flex items-center gap-sm">
          <button className="p-[6.5px] hover:text-dark-tertiary hover:dark:text-light-tertiary duration-300">
            <Icon name="sun" className="" />
          </button>

          <button className="p-[6.5px] hover:text-dark-tertiary hover:dark:text-light-tertiary duration-300">
            <Icon name="clock-counter-clockwise" className="" />
          </button>

          <button className="p-[6.5px] hover:text-dark-tertiary hover:dark:text-light-tertiary duration-300">
            <Icon name="bell" className="" />
          </button>

          <button
            onClick={toggleUtilities}
            className="p-[6.5px] hover:text-dark-tertiary hover:dark:text-light-tertiary duration-300"
          >
            <Icon name="sidebar" className="" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
