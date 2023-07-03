import { Outlet, Link } from "react-router-dom";

import banner from "./assets/cyborg.webp";

import "./stylesheets/layout.css";


const Layout = () => {
    return (
        <>
            <header>
                <Link to="/">
                    <img src={banner} alt="cyborg" className="banner"/>
                </Link>
                <div className="menu">
                    <div className="menu-element">
                        <Link to="/regulamin">
                            Regulamin
                        </Link>
                    </div>
                    <div className="menu-element">
                        <Link to="/zasady-oceniania">
                            Zasady oceniania
                        </Link>
                    </div>
                    <div className="menu-element">
                        <Link to="/plakat">
                            Plakat
                        </Link>
                    </div>
                    <div className="menu-element">
                        <Link to="/wyniki">
                            Wyniki
                        </Link>
                    </div>
                    <div className="menu-element">
                        <Link to="/kontakt">
                            Kontakt
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;