import React from "react";
import styled from "styled-components";

const Footerr = styled.footer`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

function Footer() {
  return (
    <Footerr>
      <span>
        Built with{" "}
        <strong>
          <a href="https://www.gatsbyjs.com/">Gatsby</a>
        </strong>
      </span>
    </Footerr>
  );
}

export default Footer;
