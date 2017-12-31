//@flow
import React, { Component } from "react";
export default class TextInput extends Component {
    render() {
        const { label, value, type, placeholder, style } = this.props;
        return (
            <div style={{ marginTop: 10, marginBottom: 10 }}>
                {label ? <p>label</p> : null}
                <input
                    placeholder={placeholder || ""}
                    onChange={e => {
                        if (!this.props.onChangeText) {
                            return;
                        }
                        this.props.onChangeText(e.target.value);
                    }}
                    type={type || "text"}
                    value={value || ""}
                    style={{ ...style }}
                />
            </div>
        );
    }
}
