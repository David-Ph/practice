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

Todo: Reducer Function
One of the most important thing to remember about reducer function in useReducer/Redux is, what we return does not get merged with the existing states, it OVERWRITES the existing state. So if there were 5 fields, and we only return 1 field, the new state will lose the 4 remaining fields. In this case, that's why we can use spread operator like

? return {
?     ...state,
?     counter: state.counter + 1,
? }

Todo: Absolutely never, EVER, directly mutate existing states
! Always, ALWAYS override existing states if you want to change the value.
Max didn't explain it in his video in Redux, but I think this is because the way React updates states, it schedules that changes and only changes it when it got the chance to. Sometimes so many things may happens at once and this schedules might be full. So if you mutate states directly, it may cause bugs.

Todo: @reduxjs/tookit
this tool is a tool created by react team to help us work with redux easier.
one of the tool provided by it is 

Todo: createSlice() from @reduxjs/toolkit
so the way this works is
first we import createSlice from redux tookit
then we call it, and it receives an object as an argument
it needs a name, an initial state, and all the methods we want it to be
behind the scene, createSlice creates a copy of the state and gives us that copied state to work with
so even if we're mutating it with state.counter++, the original state is still immutable.

Todo: configureStore
configureStore would create and configure the store for us, and it can help us manage multiple reducers easier
?const store = configureStore({
?  reducer: counterSlice.reducer,
?  // reducer: {counter: counterSlice.reducer} // this is how we would do it if we have multiple reducers, it will combine every reducer into one big reducer
?});
*/
