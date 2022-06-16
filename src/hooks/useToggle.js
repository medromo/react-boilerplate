import { useState, useMemo } from "react";

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const fns = useMemo(
    () => ({
      on: () => setValue(true),
      off: () => setValue(false),
      toggle: () => setValue(value => !value),
      reset: () => setValue(initialValue),
    }),
    [initialValue]
  );

  return [value, fns];
}

export { useToggle };
