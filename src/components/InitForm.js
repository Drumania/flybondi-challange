import React, { useState } from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

const InitForm = () => {
    // const [textVal, setTextVal] = useState("");
    // const [condicVal, setCondicVal] = useState("Todos");
    const [minVal, setMinVal] = useState(200000);
    const [maxVal, setMaxVal] = useState(900000);

    const onSlidePrecio = values => {
        setMinVal(Math.trunc(values[0]));
        setMaxVal(Math.trunc(values[1]));
    };

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     console.log(`textVal : ${textVal} `);
    //     console.log(`condicVal : ${condicVal} `);
    //     console.log(`minVal : ${minVal} `);
    //     console.log(`maxVal : ${maxVal} `);
    // };

    return (
        <div className="InitForm container bg-white-opa py-3 rounded-top">
            <form className="row">
                <div className="col-12 col-lg-3">
                    <h4 className="mb-3">
                        Origen{" "}
                        <i class="fas fa-plane-departure float-right"></i>
                    </h4>
                    <div class="input-group mb-3">
                        <select class="custom-select" id="inputGroupSelect01">
                            <option value="BUE">
                                El Palomar - Buenos Aires
                            </option>
                            <option value="ASU">Asunción</option>
                            <option value="COR">Córdoba</option>
                        </select>
                    </div>
                </div>
                <div className="col-12 col-lg-3">
                    <h4 className="mb-3">
                        Destino <i class="fas fa-plane-arrival float-right"></i>
                    </h4>
                    <div class="input-group mb-3">
                        <select class="custom-select" id="inputGroupSelect01">
                            <option selected>-- Indistinto --</option>
                            <option value="BUE">
                                El Palomar - Buenos Aires
                            </option>
                            <option value="ASU">Asunción</option>
                            <option value="COR">Córdoba</option>
                        </select>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <h4 className="mb-3">Precio</h4>
                    <div className="wrap-slider row no-gutters col-12">
                        <div
                            className="col-12 col-lg-2 pb-4 pb-lg-0 home-pre-min"
                            id="bs-pre-min"
                        >
                            $ {Intl.NumberFormat("de-DE").format(minVal)}
                        </div>
                        <div className="col-12 col-lg-7 px-0 px-lg-2 ">
                            <Nouislider
                                range={{ min: 50000, max: 2500000 }}
                                start={[200000, 900000]}
                                step={10000}
                                connect
                                onSlide={onSlidePrecio}
                            />
                        </div>
                        <div
                            className="col-12 col-lg-3 pt-4 pt-lg-0 text-left text-lg-right home-pre-max"
                            id="bs-pre-max"
                        >
                            $ {Intl.NumberFormat("de-DE").format(maxVal)}
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-2">
                    <input type="submit" value="Buscar" />
                </div>
            </form>
        </div>
    );
};

export default InitForm;
