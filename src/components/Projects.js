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
                href="https://pill-pouch.vercel.app/login"
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
      <div className="projects__cards">
        <div className="projects__card-dinner">
          <div className="projects__card-content">
            <h2>DinnerDraft</h2>

            <p className="project-description">
              DinnerDraft is a application for users to organize their meal
              plans. Features include: web scraping recipes from URLs, planning
              meals, and saving recipes.
            </p>
            <div className="projects__content-skill">
              <p>TypeScript</p>
              <p>React</p>
              <p>HTML</p>
              <p>Material UI</p>
              <p>Firebase</p>
              <p>Node.Js</p>
            </div>
            <div className="projects__card-buttons">
              <a
                href="https://dinner-draft.vercel.app/login"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="dinner-draft-bg"
                  className="maskSite"
                  src="https://cdn3.iconfinder.com/data/icons/iconano-web-stuff/512/109-External-512.png"
                />
                website
              </a>
              <a
                href="https://github.com/jxcoulton/DinnerDraft"
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
