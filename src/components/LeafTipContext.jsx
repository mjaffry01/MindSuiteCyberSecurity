import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

/**
 * Leaf definitions open from focus (keyboard on ?) or pin (click ?).
 * Precedence is focus > pin. Moving to another leaf clears the active tip.
 * `dismissedId` lets Escape (or a second click) close a definition until
 * focus moves away.
 */
const EMPTY = { hover: null, focus: null, pin: null, dismissedId: null };

function resolve(state) {
  const entry = state.hover || state.focus || state.pin;
  if (!entry) return null;
  return entry.id === state.dismissedId ? null : entry;
}

const LeafTipContext = createContext({
  active: null,
  isExpanded: () => false,
  hoverTip: () => {},
  leaveTip: () => {},
  focusTip: () => {},
  blurTip: () => {},
  pinTip: () => {},
  clearTips: () => {},
});

export function LeafTipProvider({ children }) {
  const [state, setState] = useState(EMPTY);

  const hoverTip = useCallback((entry) => {
    setState((s) =>
      s.hover?.id === entry.id
        ? s
        : { ...s, hover: entry, dismissedId: s.dismissedId === entry.id ? s.dismissedId : null },
    );
  }, []);

  const leaveTip = useCallback((id) => {
    setState((s) =>
      s.hover?.id === id
        ? { ...s, hover: null, dismissedId: s.dismissedId === id ? null : s.dismissedId }
        : s,
    );
  }, []);

  const focusTip = useCallback((entry) => {
    setState((s) =>
      s.focus?.id === entry.id
        ? s
        : { ...s, focus: entry, dismissedId: s.dismissedId === entry.id ? s.dismissedId : null },
    );
  }, []);

  const blurTip = useCallback((id) => {
    setState((s) =>
      s.focus?.id === id
        ? { ...s, focus: null, dismissedId: s.dismissedId === id ? null : s.dismissedId }
        : s,
    );
  }, []);

  const pinTip = useCallback((entry) => {
    setState((s) =>
      s.pin?.id === entry.id
        ? { ...s, pin: null, dismissedId: entry.id }
        : { ...s, pin: entry, dismissedId: null },
    );
  }, []);

  const clearTips = useCallback(() => setState(EMPTY), []);

  const active = resolve(state);
  const hasActive = Boolean(active);

  useEffect(() => {
    if (!hasActive) return undefined;
    function onKey(event) {
      if (event.key !== "Escape") return;
      setState((s) => {
        const current = resolve(s);
        return current ? { ...s, focus: null, pin: null, dismissedId: current.id } : s;
      });
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hasActive]);

  /**
   * `aria-expanded` tracks only the states a screen-reader user can be in when
   * reading the control: latched by click, or revealed by keyboard focus. Pointer
   * hover never moves focus, so it never flips the ARIA state and cannot fight it.
   */
  const isExpanded = useCallback(
    (id) =>
      Boolean(
        active && active.id === id && (state.pin?.id === id || state.focus?.id === id),
      ),
    [active, state.pin, state.focus],
  );

  const value = useMemo(
    () => ({ active, isExpanded, hoverTip, leaveTip, focusTip, blurTip, pinTip, clearTips }),
    [active, isExpanded, hoverTip, leaveTip, focusTip, blurTip, pinTip, clearTips],
  );

  return <LeafTipContext.Provider value={value}>{children}</LeafTipContext.Provider>;
}

export function useLeafTip() {
  return useContext(LeafTipContext);
}
