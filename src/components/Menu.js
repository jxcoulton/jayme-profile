import { useCallback, useEffect, useState } from "react";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleCloseMenu = useCallback(() => {
    if (showMenu) {
      setShowMenu(false);
    }
  }, [showMenu]);

  useEffect(() => {
    document.addEventListener("scroll", handleCloseMenu);
    return () => {
      document.removeEventListener("scroll", handleCloseMenu);
    };
  }, [handleCloseMenu]);

  const handleMenu = (e) => {
    e.preventDefault();
    setShowMenu(true);
  };

  return (
    <>
      <img
        className="menu-button"
        src="https://icon-library.com/images/white-menu-icon/white-menu-icon-4.jpg"
        onClick={handleMenu}
        alt="menu"
      />

      <div className={`menu__dropdown-${showMenu ? "open" : "closed"}`}>
        <div className="menu__dropdown-icons">
          <img className="logo" src="/JC.png" alt="logo" />
          <img
            className="menu-button close-button"
            src="http://cdn.onlinewebfonts.com/svg/img_143760.png"
            alt="close"
            onClick={handleCloseMenu}
          />
        </div>
        <div className="menu__dropdown-links">
          <a className="hover-underline-animation" href="#about-me">
            About Me
          </a>
          <a className="hover-underline-animation" href="#skills">
            Skills
          </a>
          <a className="hover-underline-animation" href="#projects">
            Projects
          </a>
          {/* <a className="hover-underline-animation" href="#contact">
            Contact
          </a> */}
        </div>
      </div>
    </>
  );
}

export default Menu;
