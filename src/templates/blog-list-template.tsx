import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Pagination from "../components/Pagination";

function BlogPage({ data, pageContext }: PageProps<any, any>) {
  const { currentPage, numPages } = pageContext;
  const pages = data.allMdx.nodes;
  return (
    <Layout pageTitle="Blog">
      {pages.map((page) => {
        const image = getImage(page.frontmatter.hero_image);
        return (
          <article key={page.id}>
            <Link to={`/blog/${page.slug}`}>
              <h2>{page.frontmatter.title}</h2>
              <GatsbyImage
                style={{ maxHeight: "30vh" }}
                image={image}
                alt={page.frontmatter.hero_image_alt}
              />
            </Link>
            <p>
              <small>{page.frontmatter.date}</small>
              {" | "}
              <small>Time to read: {page.timeToRead}m</small>
            </p>
            <p>{page.excerpt}</p>
          </article>
        );
      })}
      <Pagination currentPage={currentPage} numPages={numPages} />
    </Layout>
  );
}

export const query = graphql`
  query pageQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
