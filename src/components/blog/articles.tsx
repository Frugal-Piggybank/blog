import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Article = styled.article``;

const Articles: React.FC<{ posts: any }> = ({ posts }) => {
  return posts.map(({ node }) => {
    const title = node.frontmatter.title || node.frontmatter.slug;

    return (
      <Article key={node.frontmatter.slug}>
        <div className="is-flex-desktop is-block-mobile level-left">
          <img
            className="level-item"
            src={`https://source.unsplash.com/${node.frontmatter.unsplash_image_id}/350x200/`}
            alt={title}
          />
          <div>
            <p>
              <small>{node.frontmatter.date}</small>
            </p>
            <p>
              <small>
                <strong>{node.timeToRead} min read</strong>
              </small>
            </p>
            <h3 className="title">
              <Link to={`${node.frontmatter.slug}`}>{title}</Link>
            </h3>
            <p
              className="article-description"
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </div>
        </div>
      </Article>
    );
  });
};

export default Articles;
