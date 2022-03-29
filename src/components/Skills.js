function Skills() {
  return (
    <div id="skills">
      <div className="triangle-white"></div>
      <h1 className="skills__title">Skills</h1>
      <div className="transition-line"></div>
      <div className="skills__skill-cards">
        <div className="skills__skill-card">
          <p>Languages</p>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS / SCSS</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div className="skills__skill-card">
          <p>Frameworks</p>
          <ul>
            <li>React.js</li>
            <li>Axios</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>Material UI</li>
          </ul>
        </div>
        <div className="skills__skill-card">
          <p>Tools</p>
          <ul>
            <li>Redux</li>
            <li>Git / GitHub</li>
            <li>Heroku</li>
            <li>Supabase</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
