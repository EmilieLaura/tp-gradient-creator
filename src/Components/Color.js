import React from "react";
import {ChromePicker} from "react-color";

class Color extends React.Component {

    state = {background:"#323D8B"};

    handleChangeComplete = (color) => {
        this.setState({background: color.hex});
    }

    render() {
        return (
            <div className="col-3 block-selection mx-auto">
                <p>Breakpoint : X %</p>
                <div className="color-block" style={this.state}></div>
                <ChromePicker color={this.state.background} onChangeComplete={this.handleChangeComplete}/>
            </div>   
        )
    }

}

export default Color;