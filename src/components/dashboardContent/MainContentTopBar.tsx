import Icon from "../sharedComponents/Icon";
import type { IconName } from "../sharedComponents/Icon";

type TabItem = {
  id: number;
  label: string;
  isActive: boolean;
};

type ButtonItem = {
  id: number;
  icon?: IconName;
  label?: string;
};

const tabs: TabItem[] = [
  {
    id: 1,
    label: "Overview",
    isActive: true,
  },
  {
    id: 2,
    label: "Targets",
    isActive: false,
  },
  {
    id: 3,
    label: "Budget",
    isActive: false,
  },
  {
    id: 4,
    label: "Users",
    isActive: false,
  },
  {
    id: 5,
    label: "Files",
    isActive: false,
  },
  {
    id: 6,
    label: "Activity",
    isActive: false,
  },
  {
    id: 7,
    label: "Settings",
    isActive: false,
  },
];

const buttons: ButtonItem[] = [
  { id: 1, icon: "plus", label: "Add User" },
  { id: 2, label: "Add Target" },
  { id: 3, icon: "three-dots" },
];

function MainContentTopBar() {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:justify-between items-center gap-3 lg:gap-0">
      <div className="flex items-center gap-compact lg:gap-md">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`pb-1 ${
              tab.isActive
                ? "text-dark-primary  dark:text-accent border-b"
                : "text-dark-tertiary dark:text-light-tertiary"
            } hover:text-dark-secondary hover:dark:text-light-secondary duration-300`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-sm ms-auto">
        {buttons.map((button) => (
          <button
            key={button.id}
            className="flex items-center gap-1 py-xs px-sm text-dark-tertiary hover:text-dark-secondary dark:text-light-tertiary hover:dark:text-light-secondary bg-dark-faint dark:bg-light-soft rounded-regular duration-300"
          >
            {button.icon && <Icon name={button.icon} size="16" className="" />}
            {button.label && button.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MainContentTopBar;
