import React, { useEffect, useState, useCallback } from "react";

import Container from "./Container";
import Counter from "./Counter";
import Counter5 from "./Counter5";
import Increase from "./Increase";
import Title from "./Title";

const MemoizedIncrease = React.memo(Increase);
const MemoizedTitle = React.memo(Title);
const MenoizedCounter5 = React.memo(Counter5, (prevProps, nextProps) => {
  return prevProps.value === nextProps.value;
});

const App = () => {
  const [counter, setCounter] = useState(0);
  const [counter5, setCounter5] = useState(counter);

  useEffect(() => {
    if (counter % 5 === 0) {
      setCounter5(Math.floor(counter / 5));
    }
  }, [counter]);

  console.log("counter", counter);

  const onIncrease = () => {
    setCounter(c => c + 1);
  };

  const memoizedOnIncrease = useCallback(() => {
    setCounter(c => c + 1);
  }, []);

  return (
    <Container name="App" flexDirection="row">
      <Container name="Not Memoized">
        <Title title="Not Memoized" />
        <Increase onIncrease={onIncrease} />
        <Counter value={counter} />
        <Counter5 value={counter5} counter={counter} />
      </Container>
      <Container name="Memoized">
        <MemoizedTitle title="Memoized" />
        <MemoizedIncrease onIncrease={onIncrease} />
        <MemoizedIncrease
          isOnIncreaseMemoized
          onIncrease={memoizedOnIncrease}
        />
        <Counter value={counter} />
        <MenoizedCounter5 value={counter5} counter={counter} />
      </Container>
    </Container>
  );
};

export default App;
