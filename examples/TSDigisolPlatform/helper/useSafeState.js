import { useState, useRef, useEffect } from "react";

const useSafeSetState = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const queue = useRef([]);
  const mounted = useRef(false);


  useEffect(() => {
    mounted.current = true;
    while (queue.current.length) {
      setValue(queue.current.shift());
    }

    return () => {
      mounted.current = false;
    };
  }, []);

  const setValueIfMounted = (nextValue) => {
    if (!mounted.current) {
      queue.current.push(nextValue);
      return false;
    }
    setValue(nextValue);
    return true;
  };

  return [value, setValueIfMounted];
};

export default useSafeSetState;
