import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const LeafTipContext = createContext({
  openId: null,
  openTip: () => {},
  closeTip: () => {},
  noticeLeaf: () => {},
});

export function LeafTipProvider({ children }) {
  const [openId, setOpenId] = useState(null);

  const closeTip = useCallback(() => setOpenId(null), []);
  const openTip = useCallback((id) => {
    setOpenId((current) => (current === id ? null : id));
  }, []);
  const noticeLeaf = useCallback((id) => {
    setOpenId((current) => (current && current !== id ? null : current));
  }, []);

  useEffect(() => {
    if (!openId) return undefined;
    function onKey(event) {
      if (event.key === "Escape") setOpenId(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openId]);

  const value = useMemo(
    () => ({ openId, openTip, closeTip, noticeLeaf }),
    [openId, openTip, closeTip, noticeLeaf],
  );

  return <LeafTipContext.Provider value={value}>{children}</LeafTipContext.Provider>;
}

export function useLeafTip() {
  return useContext(LeafTipContext);
}
