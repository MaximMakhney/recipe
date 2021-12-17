import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <>
      {showButton ? (
        <button onClick={scrollToTop} className="back-to-top">
        <i class="fas fa-arrow-circle-up"></i>
      </button>
      ) : null}
    </>
  );
};

export {ScrollTop};