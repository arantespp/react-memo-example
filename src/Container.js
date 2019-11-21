import React, { useEffect, useRef } from "react";

import styled from "styled-components";

const BorderContainer = styled.div`
  width: fit-content;

  border: solid darkgray 3px;
  border-radius: 10px;

  padding: 10px;
  margin-bottom: 15px;

  display: flex;
  flex-direction: ${props => props.flexDirection || "column"};
  align-items: center;
`;

const Name = styled.span`
  margin-top: 25px;
  font-style: italic;
`;

const Container = ({ children, name, flexDirection }) => {
  console.log(`${name} updated`);

  const numberOfUpdates = useRef(0);

  useEffect(() => {
    numberOfUpdates.current++;
  });

  return (
    <>
      <Name>
        {name} ({numberOfUpdates.current})
      </Name>
      <BorderContainer flexDirection={flexDirection}>
        {children}
      </BorderContainer>
    </>
  );
};

export default Container;
