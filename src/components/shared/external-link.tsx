import React from "react";

interface ExternalLinkProps {
  href: string;
  className?: string;
  openNewTab?: boolean;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  className,
  openNewTab = false,
  children,
}) => {
  return (
    <a
      href={href}
      target={openNewTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
