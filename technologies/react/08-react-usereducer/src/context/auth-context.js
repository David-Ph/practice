import React from 'react';

// context here is just app or component white state
// so you can insert whatever, but it will often an object
// AuthContext itsel is not a component, but it will contain an component
const AuthContext = React.createContext({
    isLoggedIn: false,
})

export default AuthContext;