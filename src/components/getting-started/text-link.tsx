import React from "react";
import { Link } from "gatsby";

import { PageRoutes } from "../../utilities/page-route-constants";

interface TextLinkProps {
  path: string;
  text: string;
}

const TextLink: React.FC<TextLinkProps> = ({ path, text }) => {
  const basePath = `${PageRoutes.GettingStarted.BaseUri}`;

  return <Link to={`${basePath}${path}`}>{text}</Link>;
};

export default TextLink;
