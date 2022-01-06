/* 
todo: lazy loading
means that we only load certain parts of our code only when that specific part is needed

? const NewQuote = React.lazy(() => import('./pages/NewQuote'));

this allows us to only download the necessary code only when we access the page that needs it. Now the problem is, downloading that code may take some time, but in the meantime react needs something to render on the screen. That's why we need to import {Suspense} from react. This allows us to set what to show while page is loading.

todo: Suspense
We need to wrap the part of the code that does the routing in Suspense component
?    <Layout>
?      <Suspense
?        fallback={
?          <div className="centered">
?            <LoadingSpinner />
?          </div>
?        }
?      >
?        <Switch>
?          <Route path="/" exact>
?            <Redirect to="/quotes" />
?          </Route>
?        </Switch>
?      </Suspense>
?    </Layout>
now, while we're waiting for the new page to load, it will show the loadingspinner component

todo: build
run this command to build/compile the code for production where all the codes is turned to javascript code for production
? npm run build

todo: what kind of hosting do we need?
For React SPA application, at the end of the day all we need is a host that can host a static page website
because after all that react code is build to javascript code, all we have is javascript, there is no server side code.

todo: server side routing vs client side routing
react-router-dom is a browser/client-side routing.
server-side routing is when you send a request to the server, and then the server took a look at the url/path from the request, and then it will send a different file depending on the url. with react SPA, we don't want to do that, we want the server to always send the same file everytime.
For react SPA, you need to configure your server so it works with SPA.
*/
