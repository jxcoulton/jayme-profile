function About() {
  return (
    <div id="about">
      <h1 className="about__title">About Me</h1>
      <div className="transition-line"></div>
      <div className="about__content">
        <img className="about__pic" src="/AboutMePic.jpg" alt="jayme" />
        <h5 className="about__paragraph">
          My name is Jayme and I'm a Web Developer and Devmountain alumni
          seeking to learn and grow from exciting opportunities utilizing React
          or other modern Javascript frameworks and tools. I aspire to work for
          an innovative company using modern languages and skills to create
          beautiful applications and state of the art user experiences. I’m
          dedicated to expanding my skills and inspired to never settle. I am
          driven, resourceful, and have a passion for creating and problem
          solving.
          <a
            className="about__button"
            href="https://docs.google.com/document/d/11KP37YyhTLCbH105--ES-cDQJcdIvKV_8N7xKeRsjaw/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            MY RESUME
          </a>
          <div className="about-contact-links contact__links">
            <a href="mailto: jayme.coulton@gmail.com">
              <div
                className="mask maskEmail contact__link"
                src="https://i.postimg.cc/m2kCdtFm/62519-icons-youtube-envelope-computer-mail-email.png"
                alt="email"
              ></div>
            </a>

            <a
              rel="noreferrer" 
              href="https://www.linkedin.com/in/jayme-coulton/"
              target="_blank"
            >
              <div
                className="mask maskLinkedIn contact__link"
                src="https://i.postimg.cc/nzVCCP43/80805-linkedin-logo-white-png.png"
                alt="linked in"
              ></div>
            </a>
            <a rel="noreferrer"  href="https://github.com/jxcoulton" target="_blank">
              <div
                className="mask maskGitHub contact__link"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="git hub"
              ></div>
            </a>
          </div>
        </h5>
      </div>
    </div>
  );
}

export default About;
