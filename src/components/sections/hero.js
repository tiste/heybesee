import React from "react";
import { NextShow } from "../NextShow";

export function HeroSection() {
  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <div className="container content">
            <div className="columns is-vcentered">
              <div className="column is-7">
                <h1 className="title is-1">Hey Be See</h1>

                <div className="has-text-justified">
                  <p>
                    Avec un grossier manque de prose, Hey Be See n'a pas de
                    description. Par contre, ils font du rock, et ils le font
                    bien.
                  </p>

                  <a
                    href="https://www.facebook.com/heybesee"
                    className="button is-black is-medium is-uppercase mx-2 my-2"
                  >
                    Facebook
                  </a>

                  <a
                    href="https://heybesee.bandcamp.com"
                    className="button is-black is-medium is-uppercase mx-2 my-2"
                  >
                    Bandcamp
                  </a>

                  <a
                    href="https://www.youtube.com/channel/UCtur_ByMThF6vJMBf20sgeA"
                    className="button is-black is-medium is-uppercase mx-2 my-2"
                  >
                    YouTube
                  </a>
                </div>
              </div>

              <div className="column has-text-centered">
                <NextShow />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
