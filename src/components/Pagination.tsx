import React from "react";
import { Link, navigate } from "gatsby";

import styled from "styled-components";

import Button from "./Button";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const PaginationNumbers = styled.ul`
  display: flex;
  flexwrap: wrap;
  justify-content: space-evenly;
  list-style: none;
  padding: 0;
  min-width: 50%;

  li {
    margin: 0;
  }
`;

interface IPaginationProps {
  currentPage: number;
  numPages: number;
}

function Pagination({ currentPage, numPages }: IPaginationProps) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? "/blog" : "/blog/" + (currentPage - 1).toString();
  const nextPage = "/blog/" + (currentPage + 1).toString();

  return (
    <Wrapper>
      <Button
        disabled={isFirst}
        onClick={() => {
          navigate(prevPage);
        }}
      >
        🡐 Prev
      </Button>

      <PaginationNumbers>
        {Array.from({ length: numPages }, (_, i) => (
          <li key={`pagination-number${i + 1}`}>
            <Link
              to={`/blog/${i === 0 ? "" : i + 1}`}
              style={{
                textDecoration: i + 1 === currentPage ? "underline" : "none",
              }}
            >
              {i + 1}
            </Link>
          </li>
        ))}
      </PaginationNumbers>
      <Button
        disabled={isLast}
        onClick={() => {
          navigate(nextPage);
        }}
      >
        Next 🡒
      </Button>
    </Wrapper>
  );
}

export default Pagination;
