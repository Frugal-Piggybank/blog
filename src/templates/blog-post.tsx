import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPost = styled.article``;

const BlogPostTemplate: React.FC<{ data: any; location: any }> = ({ data }) => {
  const {
    post: {
      html,
      excerpt,
      timeToRead,
      frontmatter: { title, tags, description, unsplash_image_id, date },
    },
  } = data;

  return (
    <Layout>
      <SEO
        title={title}
        description={description || excerpt}
        // imageSrc={heroImage}
      />
      <BlogPost className="content">
        <h1 className="has-text-centered">{title}</h1>

        {/* <img className="post-image" src={heroImage} alt="" /> */}

        <p>{date}</p>
        <p>
          <strong>{timeToRead} min read</strong>
        </p>
        {tags && (
          <div className="tags">
            {tags.map((tag) => (
              <span className="tag is-dark">{tag}</span>
            ))}
          </div>
        )}
        <section dangerouslySetInnerHTML={{ __html: html }} />
      </BlogPost>
    </Layout>
  );
};

export default BlogPostTemplate;

export const blogPostQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        unsplash_image_id
        tags
      }
    }
  }
`;
