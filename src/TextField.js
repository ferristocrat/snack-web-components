//@flow
import React, { Component } from "react";
export default class TextField extends Component {
    render() {
        const { label, value, type, placeholder } = this.props;
        return (
            <div>
                <p>{label}</p>
                <input
                    placeholder={placeholder || ""}
                    onChange={this.props.onChange}
                    type={type || "text"}
                    value={value || ""}
                />
            </div>
        );
    }
}
