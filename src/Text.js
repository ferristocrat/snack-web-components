//@flow
import { colors } from "./styles";
import React, { Component } from "react";
export default class Text extends Component {
    render() {
        const {
            xxxlarge,
            xxlarge,
            xlarge,
            large,
            small,
            xsmall,
            center,
            bold,
            color,
            underline,
            lineThrough
        } = this.props;

        let fontSize = 16;
        let textAlign = "left";
        let fontWeight = "normal";
        let fontStyle = "none";

        if (xxxlarge) {
            fontSize = 36;
        }
        if (xxlarge) {
            fontSize = 30;
        }
        if (xlarge) {
            fontSize = 24;
        }
        if (large) {
            fontSize = 18;
        }
        if (small) {
            fontSize = 14;
        }
        if (xsmall) {
            fontSize = 12;
        }
        if (center) {
            textAlign = "center";
        }
        if (bold) {
            fontWeight = "bold";
        }
        if (underline) {
            fontStyle = "underline";
        }
        if (lineThrough) {
            fontStyle = "line-through";
        }
        return (
            <span
                onClick={this.props.onPress}
                style={{
                    color: color || colors.text,
                    fontSize: fontSize,
                    textAlign: textAlign,
                    fontWeight: fontWeight,
                    ...this.props.style,
                    textDecoration: fontStyle,
                    display: "inline-block"
                }}
            >
                {this.props.children}
            </span>
        );
    }
}
