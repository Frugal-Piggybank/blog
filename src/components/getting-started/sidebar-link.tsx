import React from "react";
import { Link } from "gatsby";

interface SidebarLinkProps {
  href: string;
  title: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, title }) => {
  const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: "is-active" } : {};
  };

  return (
    <li>
      <Link to={href} getProps={isActive}>
        {title}
      </Link>
    </li>
  );
};

export default SidebarLink;
