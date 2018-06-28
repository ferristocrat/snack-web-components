//@flow
import React, { Component } from "react";
import { colors } from "./styles";
export default class Button extends Component {
    render() {
        const { labelColor, backgroundColor } = this.props;
        return (
            <div>

                <button
                    onClick={this.props.onPress}
                    style={{
                        backgroundColor: backgroundColor || colors.blue,
                        color: labelColor || "white",
                        ...this.props.style
                    }}
                >
                    {this.props.label}
                </button>
            </div>
        );
    }
}
