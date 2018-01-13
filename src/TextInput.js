//@flow
import React, { Component } from "react";

// TODO:
// number only
// phone number

const filterNumber = value => {
    return value.match(/^\d+(\.\d+)?$/);
};

export default class TextInput extends Component {
    render() {
        const { label, value, type, placeholder, style, number } = this.props;
        return (
            <div style={{ marginTop: 10, marginBottom: 10 }}>
                {label ? <p>label</p> : null}
                <input
                    placeholder={placeholder || ""}
                    onChange={e => {
                        if (!this.props.onChangeText) {
                            return;
                        }
                        var value = e.target.value;
                        if (number && filterNumber(value)) {
                            this.props.onChangeText(value);
                        }
                        this.props.onChangeText(value);
                    }}
                    type={type || "text"}
                    value={value || ""}
                    style={{ ...style }}
                />
            </div>
        );
    }
}
