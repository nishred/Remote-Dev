import { useEffect, useState } from "react";

function useLocalStorage<T>(key: string, initialState: T) {

  const [state, setState] = useState<T>(() => {

    return window.localStorage.getItem(key)
      ? JSON.parse(window.localStorage.getItem(key)) as T
      : initialState;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState] as const;
}

export default useLocalStorage;
