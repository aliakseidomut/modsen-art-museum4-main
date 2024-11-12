import { useEffect, useRef } from "react";

export const useOutsideClick = (
  callback: () => void,
  excludedRef: React.RefObject<HTMLElement> | null = null,
) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        (!excludedRef ||
          !excludedRef.current ||
          !excludedRef.current.contains(event.target as Node))
      ) {
        callback();
      }
    };

    document.addEventListener("mouseup", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, [callback, excludedRef]);

  return ref;
};
