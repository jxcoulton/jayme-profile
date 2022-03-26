function Projects() {
  return (
    <div id="projects">
      <div className="triangle-dark-gray"></div>
      <h1 className="projects__title">Projects</h1>
      <div className="transition-line"></div>
      <div className="projects__cards">
        <div className="projects__card">
          <div className="projects__card-content">
            <h2>Pill Pal</h2>

            <p className="project-description">
              Pill Pal is a medication management application. Features include:
              identifying medications, tracking medications, and comparing the
              interactivity of medications
            </p>
            <div className="projects__content-skill">
              <p>JavaScript</p>
              <p>React</p>
              <p>HTML</p>
              <p>Material UI</p>
              <p>Supabase</p>
              <p>Axios</p>
            </div>
            <div className="projects__card-buttons">
              <a
                href="https://pill-pouch-kzynef722-jxcoulton.vercel.app/login"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="pill-pal-bg"
                  className="maskSite"
                  src="https://cdn3.iconfinder.com/data/icons/iconano-web-stuff/512/109-External-512.png"
                />
                website
              </a>
              <a
                href="https://github.com/jxcoulton/Pill-Pouch"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="github-logo"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                />
                github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
