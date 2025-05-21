import '../css/Navbar.css'

const Navbar = () => {

    return (
        <nav>
            <a className="navbar-logo" href="#">
                <img className="etmn-logo" src="images/etmn_logo.png" />
            </a>
            <ul>
                <li><a href="#">Home</a></li>
                <li className="menu1"><a  href="#">Services</a>
                    <ul className="submenu">
                        <li><a href="#">3D Printing</a></li>
                        <li><a href="#">Teaching</a></li>
                        <li style={{marginBottom:"15px"}}><a href="#">Workshops</a></li>
                    </ul>
                </li>
        <li><a href="#marketplace">Marketplace</a></li>
                <li className="menu1"><a  href="#">Products</a>
                    <ul className="submenu">
                        <li><a href="#">3D Printers</a></li>
                        <li><a href="#">Filaments</a></li>
                        <li style={{marginBottom:"15px"}}><a href="#">Accessories</a></li>
                    </ul>
                </li>
                <li><a style={{whiteSpace: "nowrap"}} href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
