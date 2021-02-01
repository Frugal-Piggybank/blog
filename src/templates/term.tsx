import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const TermTemplate: React.FC<{ data: any }> = ({ data }) => {
  const {
    term: {
      html,
      frontmatter: { title },
    },
  } = data;

  return (
    <Layout>
      <h1 className="title is-1">Definition for {title}</h1>
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default TermTemplate;

export const termQuery = graphql`
  query TermBySlugQuery($slug: String!) {
    term: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
      }
    }
  }
`;
