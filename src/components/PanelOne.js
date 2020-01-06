import React from "react";

const PanelOne = () => {
    return (
        <div className="panel-one">
            <div className="container ">
                <div class="d-flex align-items-center wrap-panel">
                    <div className="border-left-fb ml-3 pl-3">
                        <h3>Buenos Aires &rarr;</h3>
                        <h1>Rio de Janeiro</h1>
                        <span>
                            Volá desde $1.500 &nbsp;
                            <br />
                            <small>
                                + tazas e impuestos: Precio final: $1.670
                            </small>
                        </span>
                        <div className="new-route">Nueva Ruta</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Header.prototype = {
//     user: PropTypes.array.isRequired
// };

export default PanelOne;
