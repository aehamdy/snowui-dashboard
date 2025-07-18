import Icon from "../sharedComponents/Icon";

function SearchInput() {
  return (
    <div className="">
      <label
        htmlFor="search-input"
        className="flex w-full py-xs px-sm text-dark-muted dark:text-light-tertiary bg-dark-faint dark:bg-light-soft rounded-regular overflow-hidden"
      >
        <Icon name="magnifying-glass" className="me-1" />
        <input
          type="text"
          name=""
          id="search-input"
          placeholder="Search"
          className="w-full text-dark-muted dark:text-light-tertiary placeholder-dark-muted dark:placeholder-light-tertiary outline-none"
        />
      </label>
    </div>
  );
}

export default SearchInput;
