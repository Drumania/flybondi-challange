import React from "react";
// import { motion } from "framer-motion";
import logo from "../img/Asset 21x.svg";

const Header = () => {
    return (
        <header className="container position-fixed py-3 rounded-bottom">
            <div className="row">
                <div className="col-4">
                    <img
                        className="mx-3"
                        src={logo}
                        alt="Fly Bondi"
                        height="50px"
                    />
                </div>
                <div className="col-8 mb-0 text-right">
                    <ul className="wrap-icons-menu">
                        <li>
                            <a href="#!" title="Buscar Vuelos">
                                <i class="fas fa-search"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#!" title="Idioma">
                                <i class="fas fa-globe"></i>
                            </a>
                        </li>

                        <li>
                            <a href="#!" title="Menu" className="float-menu">
                                <i class="fas fa-bars"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

// Header.prototype = {
//     user: PropTypes.array.isRequired
// };

export default Header;
