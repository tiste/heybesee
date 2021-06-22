import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export function Nav() {
  const [navIsOpened, setNavIsOpened] = useState(false);

  function toggleNav() {
    setNavIsOpened(!navIsOpened);
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item pr-6" to="/">
            <StaticImage
              src="../../images/icon.png"
              alt="Logo"
              width={96}
              height={96}
            />
          </Link>

          <div
            className="navbar-burger burger"
            role="presentation"
            onClick={() => toggleNav()}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div className={"navbar-menu " + (navIsOpened ? "is-active" : "")}>
          <div className="navbar-start">
            <Link className="navbar-item pr-6" to="/">
              <span className="title is-uppercase">Accueil</span>
            </Link>
            <Link className="navbar-item pr-6" to="/posters">
              <span className="title is-uppercase">Nos affiches</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
