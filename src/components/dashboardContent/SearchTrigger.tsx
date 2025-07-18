import { useSearchPanel } from "../../hooks/useSearchPanel";
import Icon from "../sharedComponents/Icon";

function SearchTrigger() {
  const { openSearchPanel } = useSearchPanel();

  return (
    <button
      onClick={openSearchPanel}
      className="flex items-center gap- max-w-[160px] py-xs px-sm text-dark-muted dark:text-light-tertiary bg-dark-faint dark:bg-light-soft rounded-regular overflow-hidden"
    >
      <Icon name="magnifying-glass" className="me-1" />

      <div className="flex justify-between items-center">
        <span className="">Search...</span>
        <span className="flex items-center px-2 text-[10px] text-dark-muted dark:text-light-tertiary dark:bg-dark-low border border-dark-low rounded-small">
          Ctrl K
        </span>
      </div>
    </button>
  );
}

export default SearchTrigger;
