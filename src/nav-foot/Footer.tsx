import { Link } from "react-router-dom"
import "./Footer.css"

export default function Footer() {
    return (
        <footer>

            <div className="fLink">
                <Link to="/">Home</Link>
                <Link to="/">Home</Link>
                <Link to="/">Home</Link>
            </div>

            <div className="fLink">
                <Link to="/">Home</Link>
                <Link to="/">Home</Link>
                <Link to="/">Home</Link>
            </div>

            <div className="fLink">
                <Link to="/">Home</Link>
                <Link to="/">Home</Link>
                <Link to="/">Home</Link>
            </div>

        </footer>
    )
}