import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h1>REVERV!</h1>
            <h3>Eventos y más!</h3>
            <div>
                <button>Techno</button>
                <button>Progressive</button>
                <button>TechHouse</button>
            </div>
            <CartWidget />
        </nav>
    )

}
export default NavBar