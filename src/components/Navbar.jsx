import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <ul className="nav nav-tabs bgcolor py-3">
            <li className='nav-item'>    
                <Link className='nav-link' to='/'><i className="bi bi-house"> </i>Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/appointments'><i className="bi bi-calendar4-week"> </i>Metting Log</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='*'><i className="bi bi-person-bounding-box"> </i>Register</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
        </ul>

    );
};
export default Navbar;