import { Link, Outlet } from "react-router-dom"
import CartWidget from "../CartWidget"
function Layout(){
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"productos"}>Productos</Link>
                    </li>
                    <li>
                        <Link to={"nosotros"}>Nosotros</Link>
                    </li>
                    <li>
                        <CartWidget/>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )   
}

export default Layout