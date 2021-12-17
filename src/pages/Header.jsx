import { Link } from "react-router-dom";

function Header({themeToggler}) {

    return (
       <header>
            <nav>
                <div className="nav-wrapper green">
                    <a href="#" className="brand-logo">Recipe</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><button className="btn" onClick={themeToggler}>Day/Night</button></li>
                    </ul>
                </div>
            </nav>
       </header>
    );
}

export { Header };
