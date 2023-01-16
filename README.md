# Quotes App
This is a web app created in React. I used plain css to style the app. This was part of an exercise by freeCodeCamp's article on seven react projects for 2023.

## Challenges faced
I experienced a challenge in calling fetch using the useEffect hook. I would make the API call, get a response and set one state based on the response data; this formed the jokes array. I also needed to maintain a derived state that would hold the individual joke information. I tried using another useEffect hook but this would set the joke once and on a reload, I was not getting any joke rendered.
I was able to overcome this problem by setting both states within the same useEffect hook. 

## Lessons learnt
1. How to pass props in react.
1. How to lazy initialize functions in react.
1. How to use keys.
1. How to use state and setState in react.
1. Use of components.
1. maintaining derived state