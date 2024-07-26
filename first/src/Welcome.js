import Navigation from "./Navigation";
function Welcome(){

    return(
        <div>
            <Navigation/>
            <h1>Welcome to SVES Commerce</h1>
            <link to="/products" >View Products</link>
        </div>
    )
}
export default Welcome;