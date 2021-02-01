import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import LogoSvg from "../../content/images/logo-with-text-glasses.svg";

const Logo = styled(LogoSvg)`
  width: 150px;
  height: 120px;
`;

const HeaderWrapper = styled.div`
  .navbar {
    max-width: 1280px;
    margin: 0 auto;
    align-items: center;
    font-size: 1.124rem;
    padding-top: 1.5rem;
    .navbar-dropdown {
      font-size: 1rem;
      box-shadow: none;
      padding-right: inherit;
    }
  }
`;

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <HeaderWrapper className="has-background-cultured">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <Logo />
          </Link>

          <a
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar"
            onClick={() => setIsActive(!isActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbar"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <Link className="navbar-item" to="/getting-started">
              Getting Started
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <a
              className="navbar-item"
              href="https://frugal-fella-playground.now.sh/"
            >
              Playground
            </a>
            <Link className="navbar-item" to="/glossary">
              Glossary
            </Link>
          </div>
        </div>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
