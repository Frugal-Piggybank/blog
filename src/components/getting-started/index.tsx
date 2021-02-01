import React from "react";
import styled from "styled-components";

import Layout from "../layout";
import Sidebar from "./sidebar";

interface GettingStartedLayoutProps {
  pageTitle: string;
  pageHeader: string;
}

const GettingStartedLayoutWrapper = styled.div`
  justify-content: space-between;
  aside {
    flex-shrink: 0;
  }
`;

const GettingStartedLayout: React.FC<GettingStartedLayoutProps> = ({
  children,
  pageTitle,
  pageHeader,
}) => {
  return (
    <Layout title={pageTitle}>
      <GettingStartedLayoutWrapper className="is-fullheight is-flex-desktop">
        <article>
          <h1 className="title is-1">{pageHeader}</h1>
          {children}
        </article>
        <hr />
        <Sidebar />
      </GettingStartedLayoutWrapper>
    </Layout>
  );
};

export default GettingStartedLayout;
