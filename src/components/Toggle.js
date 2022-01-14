import React from "react";

import styled from "styled-components";
import useDarkMode from "use-dark-mode";

const Input = styled.input`
  &[type="checkbox"] {
    width: 0;
    height: 0;
    visibility: hidden;
  }

  &:checked + label:after {
    left: calc(100% - 4px);
    transform: translateX(-100%);
  }

  &:checked + label {
    background-color: darkgrey;
  }
`;

const Label = styled.label`
  display: block;
  width: 40px;
  height: 20px;
  background-color: grey;
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
  box-shadow: 0 0 2px #477a8550;

  &:after {
    content: "";
    width: 12px;
    height: 12px;
    background-color: white;
    position: absolute;
    border-radius: 7px;
    top: 4px;
    left: 4px;
    transition: 0.5s;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

function Toggle() {
  const darkMode = useDarkMode(false);
  return (
    <Container>
      <Input
        type="checkbox"
        name="switch"
        id="switch"
        checked={darkMode.value}
        onChange={darkMode.toggle}
      />
      <Label htmlFor="switch" />
    </Container>
  );
}

export default Toggle;
