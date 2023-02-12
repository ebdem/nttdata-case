import { useEffect, useState } from "react";

const useSliderAminated = () => {
  const [activeId, setActiveId] = useState(0);
  const handleClickAction = () => {
    setActiveId((prev) => (prev + 1) % 3);
  };

  useEffect(() => {
    const autoSlideTimer = setInterval(() => {
      handleClickAction();
    }, 3700);

    return () => {
      clearInterval(autoSlideTimer);
      clearTimeout(setTimeout as any);
    };
  }, [activeId]);

  return {
    handleClickAction,
  };
};

export default useSliderAminated;