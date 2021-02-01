import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

import { PageRoutes } from "../../utilities/page-route-constants";

interface NextLinkProps {
  path: string;
  text: string;
}

const NextLink: React.FC<NextLinkProps> = ({ path, text }) => {
  const basePath = `${PageRoutes.GettingStarted.BaseUri}`;

  return (
    <Link to={`${basePath}${path}`}>
      <button className="button is-primary">
        <span>{text}</span>
        <span className="icon is-small">
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </span>
      </button>
    </Link>
  );
};

export default NextLink;
