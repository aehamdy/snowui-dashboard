import { useSearchPanel } from "../../hooks/useSearchPane.l";
import SearchInput from "../dashboardContent/SearchInput";
import Icon from "./Icon";
import SearchResults from "./SearchResults";

function SearchPanel() {
  const { isSearchPanelOpen, closeSearchPanel } = useSearchPanel();

  return (
    <section
      className={`absolute w-[95%] lg:w-3/4 h-[80%] lg:h-3/4 top-0 start-1/2 -translate-x-1/2 p-cozy lg:p-lg bg-light-primary dark:bg-[#2a2a2a] rounded-large shadow-2xl shadow-gray-500 dark:shadow-gray-900 ${
        isSearchPanelOpen
          ? "top-1/2 -translate-y-1/2 z-50 opacity-100"
          : "-z-10 opacity-0"
      } transition-all duration-300 overflow-hidden`}
    >
      <div className="relative flex flex-col gap-10 justify-center items-center w-full h-full">
        <button
          onClick={closeSearchPanel}
          className="absolute top-0 end-0 p-sm border border-dark-tertiary dark:border-light-tertiary rounded-medium"
        >
          <Icon name="x" size="19" />
        </button>

        <div className="w-[100%] lg:w-1/2">
          <SearchInput />
        </div>

        <SearchResults />
      </div>
    </section>
  );
}

export default SearchPanel;
