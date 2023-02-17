import { useEffect, useMemo, useState } from 'react';

export const useOnScreen = (options, targetRef) => {
  const [isOnScreen, setIsOnScreen] = useState();
  const callbackFunction = entries => {
    const [entry] = entries;
    setIsOnScreen(entry.isIntersecting);
  };
  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);
    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, optionsMemo]);
  return isOnScreen;
};
