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
*/
