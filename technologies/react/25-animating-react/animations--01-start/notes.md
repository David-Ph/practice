## What's the problem with using css for animations?

Often times, just using css for animation is fine enough and it's usually good for performance.
The problem is, it's not very "react-like". The modal and backdrop are still in the dom.
We can use react conditional rendering, but then it gets awkward to animate.
