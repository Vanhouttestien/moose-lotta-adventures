import { useCallback, useEffect, useState, type CSSProperties } from "react";

const DVH_SUPPORTED =
  typeof window !== "undefined" &&
  typeof window.CSS !== "undefined" &&
  window.CSS.supports?.("height", "1dvh") === true;

export function useViewportHeight(minHeight = false) {
  const [vh, setVh] = useState(() => (typeof window === "undefined" ? 0 : window.innerHeight));

  useEffect(() => {
    if (DVH_SUPPORTED) return;
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setVh(window.innerHeight));
    };
    update();
    window.addEventListener("resize", update);
    window.visualViewport?.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", update);
      window.visualViewport?.removeEventListener("resize", update);
    };
  }, []);

  const style = useCallback(
    (): CSSProperties =>
      DVH_SUPPORTED
        ? { [minHeight ? "minHeight" : "height"]: "100dvh" }
        : { [minHeight ? "minHeight" : "height"]: `${vh}px` },
    [vh, minHeight],
  );

  return style();
}
