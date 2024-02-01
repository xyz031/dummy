import { Outlet, Link } from "react-router-dom"
import About from "./about"
import Home from "./home"
function Layout() {

  
    return (
      <>
      <div className="flex sm:justify-center space-x-9  bg-orange-600">
        
        <div>
            <Link to="/">Home</Link>
            </div>
            <div>
            <Link to="About">About</Link>
            </div>

      </div>
     <Outlet/>
     <div className="bg-pink-200 flex">
  <div >01</div>
  <div class="contents">
    <div class="flex-1 ...">02</div>
    <div class="flex-1 ...">03</div>
  </div>
  <div class="flex-1 ...">04</div>
</div>
     
      </>
    )
  }
  
  export default Layout
