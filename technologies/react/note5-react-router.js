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

Todo: How do react rounter handle routes with same prefixes?
    1. So react router will look for routes with same prefixes, for example
        ? /product
        ? /product/:id
    in this example, react router will render both /product and /product/:id page on screen

Todo: {Switch} from "react-router"
    1. So if we want react router to render only 1 component, we can wrap the routers in switch. But the problem with this is, it will only return the one it first match with. So in the example above, it will only render /product and not /product/:id
    2. How to get around that? we use exact. so it will only render that component if the route is exactly the same
?    <Switch>
?        <Route exact path="/welcome">
?          <Welcome />
?        </Route>
?    </Switch>

Todo: Nested Route
    1. We can also define a route inside a component, so that component will only render if the route matches the path
?    <div>
?      <h1>Welcome page</h1>
?      <Route path="/welcome/new-user">
?        <p>Welcome, new user!</p>
?      </Route>
?    </div>
    in the example above, if we only go to /welcome, it will only render the h1. if we go to /welcome/new-user, it will render h1 and p

Todo: Redirect
? <Route path="/" exact>
?    <Redirect to="/welcome" />
? </Route>

Todo: useHistory
useHistory allows you to access the history object that allows you access and manage the URL.
you can use useHistory to programmatically redirect users for example after they submit a form. There are 2 kinds of redirect for history, push and replace

Push: pushes a new page into our stack of pages, which allows the users to go back to the previous page
replace: replaces the page with a new page, which doesn't allow the user to go back 

Todo: Prompt
When a user is working on a form, sometimes they can accidentally leave the page, and then suddenly everything they're working on is lost. To prevent this, we can add a prompt like "Are you sure" when a user is working on the form. 

1. create a state to see if the user is working on the form or not
2. create the prompt component on the page
3. the when prop is the condition for the prompt to appear
4. the message is the message you want to see, it accepts a function with the location/url as argument

? <Prompt when={isFocused} message={(location) => "Are you sure?"} />

todo: useLocation
useHistory allows you to access information about the currently loaded url
? const location = useLocation();
? const queryParams = new URLSearchParams(location.search);
? const isSortingAsc = queryParams.get("sort") === "asc";

todo: useRouteMatch();
useRouteMatch() we don't need to hard code link, we can just get the useROuteMatch and get the path or url from it
?  const match = useRouteMatch();
?  <Route path={`${match.path}/comments`}>

*/
