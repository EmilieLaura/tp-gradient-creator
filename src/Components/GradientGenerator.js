import React, {useState} from "react";
import Color from "./Color";

export default function GradientGenerator() {

    const color = {background: "linear-gradient(90deg, #f1f1f1 20%, #323D8B 80%"};

    return (
        <div>
            <div className="col-10 mx-auto block-result gradient-block"  style={color}></div>
            <p>Gradient values : </p>
        </div>

    )

}


