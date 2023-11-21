import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <h1>erkizi</h1>
            <h3>Mucho más que indumentaria</h3>
            <div>
                <button>Remeras</button>
                <button>Pantalones</button>
                <button>Camperas</button>
            </div>
            <CartWidget />
        </nav>
    )

}
export default NavBar