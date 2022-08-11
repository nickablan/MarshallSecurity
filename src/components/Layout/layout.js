import { Outlet, Link } from "react-router-dom"

const Layout = () => {
    console.log('displaying layout page')
    return (
        <div className="layout">
            <nav>
            <h1>Welcome to Marshall Security!</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
            <footer>
                <h3>Marshall Security © 2022</h3>
            </footer>
        </div>
    )
}

export default Layout