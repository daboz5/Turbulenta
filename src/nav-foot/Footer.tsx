import "./Footer.css"

export default function Footer() {
    return (
        <footer>
            <div className="footerBox">
                <div className="pages">
                    <h3>Check out these pages:</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="./router/info.html">Info</a></li>
                        <li><a href="./router/roleplays.html">Roleplays</a></li>
                    </ul>

                </div>

                <div className="roleplays">
                    <h3>Check out these roleplays:</h3>
                    <ul>
                        <li><a href="./router/char1.html">Chaos Children episode 1: how do you
                            like your taters?</a></li>
                    </ul>

                </div>

                <div className="links">
                    <h3>Links</h3>
                    <ul>
                        <li><a href="">Discord</a></li>
                        <li><a href="https://www.d20.si">Amulet D20</a></li>
                        <li><a href="">Mladi Zmaji</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}