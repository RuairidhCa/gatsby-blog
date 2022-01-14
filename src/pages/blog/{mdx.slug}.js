import * as React from "react";
import { graphql, navigate } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

import Layout from "../../components/layout";
import Button from "../../components/Button";

const ImgCaption = styled.p`
  margin-top: 0px;
`;

const BlogPost = ({ data }) => {
  const lastUpdateDate = data.mdx.parent.modifiedTime;

  const showLastUpdated = lastUpdateDate !== data.mdx.frontmatter.date;

  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Button onClick={() => navigate(-1)}>🡐 Go Back</Button>
      <p>
        {data.mdx.frontmatter.date}{" "}
        {showLastUpdated ? `(Updated: ${lastUpdateDate})` : null}
      </p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <ImgCaption>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </ImgCaption>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "D MMMM YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      parent {
        id
        ... on File {
          modifiedTime(formatString: "D MMMM YYYY")
        }
      }
      body
    }
  }
`;

export default BlogPost;
