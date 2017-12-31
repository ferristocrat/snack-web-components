//@flow
import React, { Component } from "react";

export default class View extends Component {
    render() {
        const { row, flex, backgroundColor } = this.props;
        return (
            <div
                className={this.props.className || ""}
                onClick={this.props.onPress}
                style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: backgroundColor || "",
                    flexDirection: row ? "row" : "column",
                    ...this.props.style
                }}
            >
                {this.props.children}
            </div>
        );
    }
}
