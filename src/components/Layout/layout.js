import { Outlet, Link } from "react-router-dom"
import "./layout.scss"

const Layout = () => {
    return (
        <div className="layout">
            <nav>
            <h1>Welcome to Marshall Security!</h1>
                <div className="router-links">
                        <Link to="/" className="router-links">Home</Link>
                        <Link to="/login" className="router-links">Login</Link>
                        <Link to="/admin" className="router-links">Admin</Link>
                        <Link to="/register" className="router-links">Register</Link>
                </div>
            </nav>
            <Outlet />
            <footer>
                <h3>Marshall Security © 2022</h3>
            </footer>
        </div>
    )
}

export default Layout