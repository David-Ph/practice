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
*/
