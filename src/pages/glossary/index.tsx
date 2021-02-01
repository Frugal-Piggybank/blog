import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../../components/layout";

const TermsList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const GlossaryPage: React.FC = () => {
  return (
    <Layout title={"Glossary"}>
      <h2 className="title is-2">Welcome to the Glossary page</h2>
      <TermsList>
        {[...Array(26)].map((val, i) => {
          const letter = String.fromCharCode(i + 65);

          return (
            <li key={i} className="title is-4">
              <Link className="px-4" to={`/glossary/${letter.toLowerCase()}`}>
                {letter}
              </Link>
            </li>
          );
        })}
      </TermsList>
    </Layout>
  );
};

export default GlossaryPage;
