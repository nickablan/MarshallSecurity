import { Outlet, Link } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <h1>Welcome to Marshall Security!</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Home</Link>
                    </li>
                    <li>
                        <Link to="/admin">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
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