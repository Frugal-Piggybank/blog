import React from "react";
import styled from "styled-components";

import NextLink from "./next-link";

interface NextSectionProps {
  path: string;
  linkText: string;
}

const NextSection: React.FC<NextSectionProps> = ({
  children,
  linkText,
  path,
}) => {
  return (
    <>
      <blockquote>{children}</blockquote>
      <NextLink path={`${path}`} text={linkText} />
    </>
  );
};

export default NextSection;
