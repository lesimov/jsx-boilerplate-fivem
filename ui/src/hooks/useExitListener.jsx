import { useEffect, useRef } from 'react';
import { fetchNui } from '../utils/fetchNui';

const LISTENED_KEYS = ['Escape'];

// Basic hook to listen for key presses in NUI in order to exit
export const useExitListener = (visibleSetter) => {
  const setterRef = useRef(() => { });

  useEffect(() => {
    setterRef.current = visibleSetter;
  }, [visibleSetter]);

  useEffect(() => {
    const keyHandler = (e) => {
      if (LISTENED_KEYS.includes(e.code)) {
        setterRef.current(false);

        fetchNui('closeUi', {});
      }
    };

    window.addEventListener('keyup', keyHandler);

    return () => window.removeEventListener('keyup', keyHandler);
  }, []);
};
