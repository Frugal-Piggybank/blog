import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";

import Articles from "../../components/blog/articles";

const BlogPage: React.FC<{ data: any }> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={`Blog`}>
      <Articles posts={posts} />
    </Layout>
  );
};

export default BlogPage;

export const blogPostsQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            description
            unsplash_image_id
          }
        }
      }
    }
  }
`;
