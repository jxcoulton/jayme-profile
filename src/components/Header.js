import Menu from "./Menu";

function Header() {
  return (
    <div className="header-bar">
      <div className="header-bar__menu-box">
        <img className="logo" src="/JC.png" alt="logo" />
        <div className="header__large-screen-links">
          <a className="hover-underline-animation" href="#scroll-point-about">
            About Me
          </a>
          <a className="hover-underline-animation" href="#skills">
            Skills
          </a>
          <a className="hover-underline-animation" href="#projects">
            Projects
          </a>
          <a className="hover-underline-animation" href="#contact">
            Contact
          </a>
        </div>
        <Menu />
      </div>
      <div className="header-bar__background">
        <div className="header-bar__content">
          <div className="transition-line"></div>
          <h1>Jayme Coulton</h1>
          <h4>UI Developer</h4>
          <div className="transition-line"></div>
        </div>
        <div className="triangle-invert" id="scroll-point-about"></div>
      </div>
    </div>
  );
}

export default Header;
