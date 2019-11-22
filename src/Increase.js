import React from "react";

import styled from "styled-components";

import Container from "./Container";

const Button = styled.button`
  background: #3498db;
  border-color: #3a98db;
  width: 50px;
  padding: 4px 0;

  border-radius: 5px;

  font-size: 30px;
`;

const Increase = ({ onIncrease, isOnIncreaseMemoized }) => {
  return (
    <Container
      name={
        isOnIncreaseMemoized ? "Increase (with memoized callback)" : "Increase"
      }
    >
      <Button onClick={onIncrease}>+</Button>
    </Container>
  );
};

export default Increase;
