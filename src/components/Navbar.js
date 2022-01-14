import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import styled from "styled-components";

import Toggle from "./Toggle";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const NavItems = styled.ul`
  list-style: none;

  padding-inline-start: 0;
  display: flex;
  justify-content: center;
  align-c: start;
  gap: 20px;
`;

const NavItem = styled.li`
  a:hover {
    text-decoration-thickness: 3px;

    text-underline-offset: 4px;
  }
`;

function Navbar() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Nav>
      <h3>
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </h3>
      <NavItems>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/blog">Blog</Link>
        </NavItem>
        <Toggle />
      </NavItems>
    </Nav>
  );
}

export default Navbar;
