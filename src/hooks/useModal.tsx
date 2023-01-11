import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [isShowing2, setIsShowing2] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }
  function toggle2() {
    setIsShowing2(!isShowing2);
  }

  return {
    isShowing,
    toggle,
    isShowing2,
    toggle2,
  };
};

export default useModal;
