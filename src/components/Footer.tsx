import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <span>
        Built with{" "}
        <strong>
          <a href="https://www.gatsbyjs.com/">Gatsby</a>
        </strong>
      </span>
    </StyledFooter>
  );
}

export default Footer;
