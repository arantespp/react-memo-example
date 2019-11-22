# React Memo Example

App: https://8wpgs.csb.app/

CodeSandbox: https://codesandbox.io/s/react-memo-example-8wpgs

## Description

I've created this application to show how React memoization works and was used in a talk I gave at Open Talks ([Opensanca](www.opensanca.com) + React Sanca), September 26, 2019.

The app is a group of containers which displays, along with their name, how many renderizations they had.

We have two states, `counter` and `counter5`. `couter` is the number of clicks on increase button and `counter5` is increased when `counter` reaches a multiple of five value.

Inside the main App, we have three containers: the first is with not memoized components; the second, with monoized ones. The third one renderizes an arc to show how `useMemo` works.

In the first two containers, we have: Title, Increase, Counter and Counter5. The role of them in this example is:

- Title: used to show how React.memo works.

It receives a single props (title) and it never changes. We expect that the Memoized Title doesn't have its renderization number increased when `counter` or `counter5` changes.

- Increase: used to show how useCallback works (it receives increase callback as props).

Even if you use Memoized Increase, the number of renderizations will continue increase if we pass a "simple" callback as props. To overcome that, we have to transform our callback with `useCallback` and pass a `memoizedOnIncrease`.

- Counter: used to show that not every should be memoized.

As the `counter` only increases, we know that Counter will always receive a new props and will be renderized. It isn't worth to to memoize it because React'd have more work comparing props everytime before re-render.

- Counter5: used to show that we can pass custom props comparation to React.memo.

Counter5 always receive `counter` and `counter5` as props but I want it re-renders only when `counter5` changes. We may pass a callback as second parameter of React.memo which we create our custom comparation. For instance:

```
const MenoizedCounter5 = React.memo(Counter5, (prevProps, nextProps) => {
  return prevProps.value === nextProps.value;
});
```

Finally, the third container renders part of an arc as a function of `counter5`. To create the circle, a function that returns an SVG path was used, and in this function, Polar to Cartesian coordinate transformations are made. For the sake of demonstration, let's assume that these transformations take a lot of processing and we don't want them to be executed every time the component is rendered, but only when `counter5` changes. In the center of the container is the number that the path functions was called.
