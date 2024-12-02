import CartWidget from "./CartWidget"

function Navbar(){

    const headerStyle = {
        marginBottom: '5%',
        borderBottom: '2px solid #646cff',
    }
    const navStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        paddingBottom: '1%',
    }

    return (
        <div style={headerStyle}>
            <h3>Lucas Ulibarri</h3>
            <div style={navStyle}>
                <a href="">Inicio</a>
                <a href="">Producto 1</a>
                <a href="">Producto 2</a>
                <CartWidget/>
            </div>
        </div>
    )

}

export default Navbar