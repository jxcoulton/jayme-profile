function Contact() {
  return (
    <div id="contact">
      <div className="triangle-white"></div>
      {/* <h1 className="contacts__title">Contact</h1>
      <div className="transition-line"></div> */}
      <div className="contact__links">
        <a href="mailto: jayme.coulton@gmail.com">
          <div
            className="mask maskEmail contact__link"
            src="https://i.postimg.cc/m2kCdtFm/62519-icons-youtube-envelope-computer-mail-email.png"
            alt="email"
          ></div>
        </a>

        <a rel="noreferrer"  href="https://www.linkedin.com/in/jayme-coulton/" target="_blank">
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
    </div>
  );
}

export default Contact;
