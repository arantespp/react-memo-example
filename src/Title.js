import React from "react";

import Container from "./Container";

const Title = ({ title }) => {
  return (
    <Container name="Title">
      <h2>{title}</h2>
    </Container>
  );
};

export default Title;
