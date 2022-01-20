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

            <div className="projects__content-skill">
              <p>- JavaScript</p>
              <p>- React</p>
              <p>- HTML</p>
              <p>- CSS</p>
              <p>- Supabase</p>
              <p>- Axios</p>
            </div>
            <div className="projects__card-buttons">
              <a
                href="https://pill-pal-rx.herokuapp.com/login"
                target="_blank"
                rel="noreferrer"
              >
                <img
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
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
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
