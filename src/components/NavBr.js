import { CartWidget } from "./CartWidget/CartWidget"

const NavBar = () => {
    return <div className="header">
        <h1 className="h1h">Logo</h1>
        <nav>
            <ul className="ulh">
                <li className="lih"><Link to="/">Inicio</Link> </li>
                <li className="lih"><Link to="cart">Cart</Link></li>
                <li className="lih"><Link to="productos">Productos</Link></li>
            </ul>
        </nav>
        <CartWidget/>
    </div>
}

export default NavBar