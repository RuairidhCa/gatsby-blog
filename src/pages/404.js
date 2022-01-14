import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 10rem;
    margin-bottom: 0;
  }
`;

function NotFoundPage() {
  return (
    <Layout>
      <Container>
        <h1>404</h1>
        <p>Page not found.</p>
        <Link to="/">Click here to go home</Link>
      </Container>
    </Layout>
  );
}

export default NotFoundPage;
