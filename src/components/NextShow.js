import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, StaticQuery } from "gatsby";

export function NextShow() {
  const staticQuery = graphql`
    {
      allFile(
        limit: 1
        filter: { relativePath: { glob: "posters/*" } }
        sort: { fields: name, order: DESC }
      ) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(
                width: 400
                layout: CONSTRAINED
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  `;

  return (
    <StaticQuery
      query={`${staticQuery}`}
      render={(data) => <NextShowComponent data={data} />}
    />
  );
}

function NextShowComponent({ data }) {
  return (
    <GatsbyImage
      image={data.allFile.edges[0].node.childImageSharp.gatsbyImageData}
      alt="Prochain concert"
    />
  );
}
