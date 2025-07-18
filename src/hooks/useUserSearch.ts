import { useState } from "react";
import useFetchData from "./useFetchData";

type Session = {
  _id: string;
  clientName?: string;
  tubeImage?: string;
  date?: string;
  total?: number;
  status?: string;
};

const initialValue: Session[] = [];

function useUserSearch() {
  const { data } = useFetchData();
  const [filteredList, setFilteredList] = useState<Session[]>(initialValue);

  const search = (query: string) => {
    if (!query.trim()) {
      setFilteredList(initialValue);
      return;
    }

    const filteredData =
      data?.filter((item) =>
        item.clientName?.toLowerCase().includes(query.toLowerCase())
      ) ?? [];

    setFilteredList(filteredData);
  };

  return { filteredList, search };
}

export default useUserSearch;
