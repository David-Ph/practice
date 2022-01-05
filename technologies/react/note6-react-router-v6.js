/* 
! Difference between v5 and v6

todo: Switch doesnt exist anymore
now you use:
? {Routes} from "react-router-dom"

todo: You no longer wrap the component in between Route component
this is the new way:
?   <Route path="/welcome" element={<Welcome />} />
?   <Route path="/products" exact element={<Products />} />
?   <Route path="/products/:productId" element={<ProductDetail />} />

todo: exact
in version 5, you need to put exact path or it will always loads the first thing it matches.
in version 6, this exact is now the default behavior

todo: /*
if you want a similar behavior with v5, you can do it like this
?   <Route path="/products/*" exact element={<Products />} />
?   <Route path="/products/:productId" element={<ProductDetail />} />
so if we go to route /products/p1, both the Products and ProductDetail will load

todo: Order of the routes
in v6, order of the routes you defined does not matter anymore, because internally the algorithm is smarter now.
?   <Route path="/products/*" exact element={<Products />} />
?   <Route path="/products/:productId" element={<ProductDetail />} />
?   <Route path="/products/edit" element={<ProductDetail />} />
if we go /products/edit, it will go to edit instead of productdetail

todo: Link activeClassName
in v6, this feature is removed, instead, you can use this way
? <NavLink
?        className={(navData) => (navData.isActive ? classes.active : "")}
?        to="/welcome"
?    >
?        Welcome
?    </NavLink>
in className, it can receive a function that receives navData as argument, this navData has data such as isActive. what you return here will be the className

todo: redirect
in v6, redirect is removed and replaced with navigate
? <Route path="/" element={<Navigate replace to="/welcome" />} />

todo: nested routes
in v6, you need to wrap all route in Routes component, and the syntax is slightly different
first of all, you need to write /* in the parent
? <Route path="/welcome/*" element={<Welcome />} />
and then, the path in the child route becomes relative, you dont need to write /welcome anymore. If you have Link here, then that is also relative
? <Routes>
?     <Route path="new-user" element={<p>Welcome, new user!</p>} />
? </Routes>

todo: alternative pattern to defining nested routes
in v6, you can define nested routes in app.js instead of children components
in app.js
? <Route path="/welcome/*" element={<Welcome />}>
?     <Route
?         path="new-user"
?         element={<p>Welcome, new user!</p>}
?     />
? </Route>
and then you need to tell the children component where to render it by using outlet as placeholder
? <Fragment>
?     <h1>The Welcome Page</h1>
?     <Outlet />
? </Fragment>

todo: useNavigate
in v6, useHistory doesn't exist anymore. we use useNavigate now
? const navigate = useNavigate();
? navigate('/welcome', {replace: true});

todo: prompt
in v6, this feature doesn't exist yet. So you may want to stick to v5 if that's an important feature
*/
