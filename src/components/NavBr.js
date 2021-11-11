import { CartWidget } from "./CartWidget/CartWidget"

const NavBar = () => {
    return <div className="header">
        <h1 className="h1h">Logo</h1>
        <nav>
            <ul className="ulh">
                <li className="lih">Enlace 1 </li>
                <li className="lih">Enlace 2 </li>
                <li className="lih">Enlace 3 </li>
            </ul>
        </nav>
        <CartWidget/>
    </div>
}

export default NavBar