import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import "../../stylesheets/main.scss";
import { Seo } from "../Seo";

export function Layout(props) {
  return (
    <>
      <Seo title={props.title} />
      <Helmet>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "MusicGroup",
            "event": [
              {
                "@type": "Event",
                "location": "Boeschèpe, FR",
                "offers": "https://www.facebook.com/events/3031257260489282",
                "startDate": "2021-06-26"
              }
            ],
            "image": [
              "https://github.com/tiste/heybesee/raw/master/src/images/icon.png"
            ],
            "name": "Hey Be See"
          }
        `}</script>
      </Helmet>
      <main className={props.cssClasses}>{props.children}</main>
    </>
  );
}

Layout.propTypes = {
  title: PropTypes.string,
  cssClasses: PropTypes.string,
};
