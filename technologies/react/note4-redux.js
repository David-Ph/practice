/* 
Todo: 3 kinds of state 
    1. Local state: 
        - State that belongs to a single component
        - for example, listening to a user input, toggling a show more detail field
        - Should be managed with internal useState/useReducer
    2. Cross Component State
        - State that afects multiple components
        - For example, open/closed modal overlay
        - should be managed with useContext/props chain/props drilling
    3. App Wide State
        - State that affects the whole app
        - For examplee, user authentication
        - Should be managed with useContext/props chain

Redux is also a tool that can also help us do that, similar to useContext

Todo: useContext vs Redux
useContext have a few potential disadvantages:
    1. In more complex apps, managing react context can lead to deeply nested jsx code and / or huge context components, leading ti to look complex
    2. React context is not optimized for frequent state changes

Todo: How Redux works
The way redux works is we store all the cross component/app wide state state we need in just one big store, and then we'll have the components that needs it subscribe to that, so whenever a state changes in that store, the component will be reevaluated.

to change the state in that store, the component needs to call a trigger/dispatch function, that sends an action to the reducer function stored in the store, and that will change the state depending on the action.
*/