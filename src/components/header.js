import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataShare } from "../navigation/navigation-stack"

const Header=()=>{
  const {data,cartItems}=useContext(DataShare)
 
    return(
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item" style={{margin:10}} >

        <Link  to={"/"} style={{textDecoration:"none",color:"black"}} >
        Home
        </Link>
        {/* <a className="nav-link active" href="#">
          Active
        </a> */}
      </li>
      <li className="nav-item" style={{margin:10}} >
      <Link  to={"/contact"}  style={{textDecoration:"none",color:"black"}} >
    {data.name}
        </Link>
      </li>

      <li className="nav-item" style={{margin:10}} >
      <Link  to={"/cartScreen"}  style={{textDecoration:"none",color:"black"}} >
     Cart {cartItems.length}
        </Link>
      </li>
    
    </ul>
  </div>
</nav>

    )
}

export default Header