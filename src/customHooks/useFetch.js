import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const initialState = { data: [], isPending: true, error: null };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();
        setState((prev) => ({
          ...prev,
          data: json,
          isPending: false,
          error: null,
        }));
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("The fetch was aborted");
        } else {
          setState((prev) => ({
            ...prev,
            isPending: false,
            error: "Could not fetch the data",
          }));
        }
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);
  return state;
};
