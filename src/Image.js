//@flow
import React, { Component } from "react";
export default class Image extends Component {
    render() {
        const { source } = this.props;
        if (!source) {
            return null;
        }
        return (
            <img
                style={{
                    ...this.props.style
                }}
                src={source}
            />
        );
    }
}
