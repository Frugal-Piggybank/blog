import React from "react";
import styled from "styled-components";

import Header from "./header";
import Footer from "./footer";
import "../../assets/styles/bulma-override.scss";
import SEO from "../seo";

const LayoutWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 8rem;
`;

interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <LayoutWrapper>
      <SEO title={title} />
      <Header />
      <section className="section">
        <main className="container">{children}</main>
      </section>

      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
