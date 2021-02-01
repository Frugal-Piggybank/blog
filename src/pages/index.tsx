import React from 'react';
import { PageProps, Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage: React.FC<PageProps> = (props) => (
  <Layout title={`Home`}>
    <p>
      Welcome to the Frugal Piggy Bank! After recently becoming a father, I
      decided to create a site that not only helped me track my own personal
      financial growth, but also serve as a reference guide for my son. As an
      extension, my hope is that it also serves others no matter where you may
      be in your own financial journey!
    </p>
    <p>
      If this is your first time on the site, welcome! Feel free to check out
      the <Link to="/getting-started">Getting Started</Link> section and branch
      out from there. If you're here for just a casual visit, my{' '}
      <Link to="/blog">Blog</Link> may have some articles you'll find
      interesting. Want to get really serious about your finances? Check out the{' '}
      <a href="https://frugal-fella-playground.now.sh/">Playground</a> and see
      if there are any tools that can assist you in making actionable
      adjustments to your finances. Finally, if there's ever a term or concept
      you come across that doesn't make sense, I try to clearly define them in
      my <Link to="/glossary">Glossary</Link>.
    </p>
    <p>
      Also, I don't claim to be a financial advisor and admittedly make quite a
      few mistakes, but that's all part of the learning process! If you find any
      errors or clarifications you'd like to bring to my attention, I'm pretty
      responsive on Twitter so feel free to shoot me a message.
    </p>
  </Layout>
);

export default IndexPage;
