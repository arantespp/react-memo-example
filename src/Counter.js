import React from "react";

import Container from "./Container";
import Number from "./Number";

const Counter = ({ value }) => {
  return (
    <Container name="Counter">
      <Number>{value}</Number>
    </Container>
  );
};

export default Counter;
