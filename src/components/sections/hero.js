import React from "react";

export function HeroSection() {
  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <div className="container content">
            <div className="columns is-vcentered has-text-centered">
              <div className="column is-three-fifths is-offset-one-fifth">
                <h1 className="title is-1">Hey Be See</h1>

                <div className="has-text-justified">
                  <p>
                    Avec un grossier manque de prose, Hey Be See n'a pas de
                    description. Par contre, ils font du rock, et ils le font
                    bien.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
