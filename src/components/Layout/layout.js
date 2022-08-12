import { Outlet, Link } from "react-router-dom"
import Button from '@material-ui/core/Button'
import "./layout.scss"

const Layout = () => {
    return (
        <div className="layout">
            <nav>
            <h1>Welcome to Marshall Security!</h1>
                <div className="router-links">
                    <Button variant="contained" >
                        <Link to="/" >Home</Link>
                    </Button>
                    <Button variant="contained" color="primary">
                        <Link to="/login" >Login</Link>
                    </Button>
                    <Button variant="contained" >
                        <Link to="/admin" >Admin</Link>
                    </Button>
                    <Button variant="contained" color="primary">
                        <Link to="/register" >Register</Link>
                    </Button>
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