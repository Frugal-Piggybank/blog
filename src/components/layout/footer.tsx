import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import ExternalLink from "../shared/external-link";

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2rem;
  line-height: 2;

  .footer-container {
    max-width: 1280px;
    margin: 0 auto;
    font-family: "Lobster", serif;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .site-title {
      font-size: 1.5rem;
    }
    .social-icons {
      justify-content: space-between;
    }
  }
`;

const Footer: React.FC = () => {
  const {
    site: {
      siteMetadata: {
        title,
        social: { twitter, instagram },
      },
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
          social {
            twitter
            instagram
          }
        }
      }
    }
  `);

  return (
    <FooterWrapper className="footer">
      <div className="footer-container">
        <div className="site-title has-text-platinum">{title}</div>
        <div className="social-icons">
          <ExternalLink
            href={`https://twitter.com/${twitter}`}
            className="icon is-medium has-text-twitter"
            openNewTab
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </ExternalLink>
          <ExternalLink
            href={`https://www.instagram.com/${instagram}`}
            openNewTab
            className="icon is-medium has-text-instagram ml-5"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </ExternalLink>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
