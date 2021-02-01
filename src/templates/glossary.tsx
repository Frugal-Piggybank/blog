import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const GlossaryTemplate: React.FC<{ data: any }> = ({ data }) => {
  const {
    allMarkdownRemark: { glossary },
  } = data;

  return (
    <Layout>
      {glossary.length > 0 ? (
        <ul>
          {glossary.map((term) => (
            <li key={term.id} className="title is-4">
              <Link
                to={`/glossary/${term.fields.letter}/${term.frontmatter.slug}`}
              >
                {term.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h1 className="title is-1">
          We couldn't seem to find any terms for that letter. Don't worry,
          though, we're always adding new terms so check back soon!
        </h1>
      )}
    </Layout>
  );
};

export default GlossaryTemplate;

export const glossaryQuery = graphql`
  query($grouping: String!) {
    allMarkdownRemark(filter: { fields: { letter: { in: [$grouping] } } }) {
      glossary: nodes {
        id
        frontmatter {
          title
          slug
        }
        fields {
          letter
        }
      }
    }
  }
`;
