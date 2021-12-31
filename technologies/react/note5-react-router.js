/* 
Todo: Steps to use react router
    1. install react-router-dom@5
    2. create the new pages
    3. in App.js, import {Route} and set up the routes with the necessary components
    4. in index.js, import {BrowserRouter} and wrap App.js in it

Todo: How to use linking
    1. If we use the a tag, it will send a brand new request for html file to the server
    2. instead, we want to import {Link} and use it instead of the a tag
    3. Behind the scene, this will just render an a tag, and then it will prevent event default, and manually update the url for us, and then also rerender the components
?   <Link to="/welcome">Welcome</Link>

Todo: NavLink   
    1. We can also import {NavLink}
    2. This works the same with {Link}, but this also sets up an extra classname when we click it
?   <NavLink activeClassName={classes.active} to="/welcome">Welcome</NavLink>

Todo: Dynamic URL
    1. If we want to use react router to get a dynamic url, for example clicking to get a detailed info of a product, we can use route like this
?   <Route path="/products-detail/:productId">

Todo: useParams
    1. We can import useParams from "react-router-dom" from the component to get access to the :params

*/
