import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../../components/Layout";

function BlogPage({ data }) {
  return (
    <Layout pageTitle="Blog">
      {data.allMdx.nodes.map((node) => {
        const image = getImage(node.frontmatter.hero_image);
        return (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <GatsbyImage
              style={{ maxHeight: "30vh" }}
              image={image}
              alt={node.frontmatter.hero_image_alt}
            />
            <p>
              <small>{node.frontmatter.date}</small>
              {" | "}
              <small>Time to read: {node.timeToRead}m</small>
            </p>
            <p>{node.excerpt}</p>
          </article>
        );
      })}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "D MMMM YYYY")
          hero_image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          hero_image_alt
        }
        id
        slug
        timeToRead
        excerpt
      }
    }
  }
`;

export default BlogPage;
