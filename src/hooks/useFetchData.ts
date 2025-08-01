import { API_URL } from "./../constants/index";
import { useEffect, useState } from "react";

type Session = {
  _id: string;
  clientName?: string;
  tubeImage?: string;
  date?: string;
  total?: number;
  status?: string;
};

function useFetchData() {
  const [data, setData] = useState<Session[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();

        const filteredData = json.sessions.filter(
          (item: Session) => item.clientName && item
        );

        setData(filteredData);
      } catch (err) {
        console.error("Fetch error:", err);

        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}

export default useFetchData;
