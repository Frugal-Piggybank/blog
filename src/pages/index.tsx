import React from "react";
import { PageProps, Link } from "gatsby";

import Layout from "../components/layout";

const IndexPage: React.FC<PageProps> = (props) => (
  <Layout title={`Home`}>
    <p>
      Hi! I'm the Frugal Fella and I created this site as a means to develop and
      track my own personal financial journey. As an extension, my hope is that
      it also serves others to get their own financial affairs in order and
      begin taking back their financial freedom!
    </p>
    <p>
      If this is your first time on the site, welcome! Feel free to check out
      the <Link to="/getting-started">Getting Started</Link> section and branch
      out from there. If you're here for just a casual visit, my{" "}
      <Link to="/blog">Blog</Link> may have some articles you'll find
      interesting. Want to get really serious about your finances? Check out the{" "}
      <a href="https://frugal-fella-playground.now.sh/">Playground</a> and see
      if there are any tools that can assist you in making actionable
      adjustments to your finances. Finally, if there's ever a word or concept
      you come across that doesn't make sense, I try to clearly define them in
      my <Link to="/glossary">Glossary</Link>.
    </p>
    <p>
      With that being said, I hope this site provides valuable information as
      you begin to map out your new journey on the road to financial freedom!
    </p>
  </Layout>
);

export default IndexPage;
