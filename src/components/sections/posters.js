import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export function PostersSection() {
  const staticQuery = graphql`
    {
      allFile(
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
      render={(data) => <PostersComponent data={data} />}
    />
  );
}

function PostersComponent({ data }) {
  return (
    <section className="section">
      <div className="container content">
        <div className="columns is-vcentered is-multiline is-mobile">
          {data.allFile.edges.map(({ node }, i) => (
            <div key={i} className="column is-6-mobile is-4-tablet">
              <GatsbyImage
                image={node.childImageSharp.gatsbyImageData}
                alt={node.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
