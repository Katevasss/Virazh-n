import { useEffect, useState } from 'react';

export default function useResize() {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  const [size, setSize] = useState(vw);

  useEffect(() => {
    const handleChangeSize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener('resize', handleChangeSize);

    return () => {
      window.removeEventListener('resize', handleChangeSize);
    };
  }, []);

  return size;
}
