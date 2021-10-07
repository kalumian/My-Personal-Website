import { useState } from "react";

function Sidebar({ lung, setLung }) {
  const [sateSidebar, setStateSidebar] = useState(false);
  return (
    <aside className={sateSidebar ? "active" : ""}>
      <div className="button-nav" onClick={() => setStateSidebar(!sateSidebar)}>
        <span></span>
      </div>
      <div onClick={() => setLung(!lung)} className="lung">
        {lung ? <span>En</span> : <span>Ar</span>}
      </div>
      <h2>
        Co<span className="LB">nt</span>ent<span className="LB">s</span>
      </h2>
      <nav>
        <ul>
          <a href="#Me">
            <li>Me</li>
          </a>
          <a href="#Education">
            <li>education</li>
          </a>
          <a href="#Skils">
            <li>Skils</li>
          </a>
          <a href="#Experience">
            <li>Experience</li>
          </a>
          <a href="#Projects">
            <li>Projects</li>
          </a>
          <a href="#Certificates">
            <li>certificates</li>
          </a>
          <a href="#My-Plan">
            <li>My Plan</li>
          </a>
          <a href="#Hobbies">
            <li>hobbies</li>
          </a>
          <a href="#Objectives">
            <li>Objectives</li>
          </a>
          <a href="#Posts">
            <li>Posts</li>
          </a>
          <a href="#Contact">
            <li>contact</li>
          </a>
        </ul>
        <span className="line"></span>
        <div className="links">
          <a href="https://twitter.com/kalumian1" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/k_alu1/" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-kalumian-b026b6199/"
            target="_blank"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
