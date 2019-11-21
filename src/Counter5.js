import React from "react";

import Container from "./Container";
import Number from "./Number";

const Counter5 = ({ value, counter }) => {
  return (
    <Container name="Counter5">
      <Number>
        {value} ({counter})
      </Number>
    </Container>
  );
};

export default Counter5;
