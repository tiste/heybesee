import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function ShowSection() {
  return (
    <section className="section">
      <div className="container content">
        <h2 className="title">Notre dernier concert</h2>
      </div>

      <div className="columns">
        <div className="column has-text-centered">
          <StaticImage src="../../images/last-show.png" alt="Dernier concert" />
        </div>
      </div>
    </section>
  );
}
