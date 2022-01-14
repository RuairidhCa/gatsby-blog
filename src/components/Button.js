import React from "react";
import styled from "styled-components";

function Button(props) {
  const Button = styled.button`
    all: unset;
    cursor: pointer;
  `;
  return <Button {...props}></Button>;
}

export default Button;
