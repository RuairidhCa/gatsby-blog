import * as React from "react";
import { createGlobalStyle } from "styled-components";

import styled from "styled-components";

import Navbar from "./Navbar";
import Footer from "./Footer";

const GlobalStyle = createGlobalStyle`
  body {  
    font-family: Roboto Mono, monospace;
    margin: 0;
  }

  body.light-mode {
    background-color: #fff;
    color: #333;
    transition: background-color 0.3s ease;

    a, a:visited {
      color: #333;
    }
  }

  body.dark-mode {
    background-color: #1a1919;
    color: #999;

    a, a:visited {
      color: #999;
    }

  }
  
  main {
    max-width: 80vw;
    margin: auto;
    flex-grow: 1;
  }

  a, a:visited {
    text-decoration: none;
  }

  a:hover, a:active {
    text-decoration: underline;

  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <GlobalStyle />
      <title>{pageTitle}</title>
      <Wrapper>
        <Navbar />
        <main>
          <h1>{pageTitle}</h1>
          <section>{children}</section>
        </main>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;
