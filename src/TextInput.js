//@flow
import React, { Component } from "react";

// TODO:
// number only
// phone number

function decimalPlaces(num) {
    var match = ("" + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    if (!match) {
        return 0;
    }
    return Math.max(
        0,
        // Number of digits right of decimal point.
        (match[1] ? match[1].length : 0) -
            // Adjust for scientific notation.
            (match[2] ? +match[2] : 0)
    );
}

const filterNumber = value => {
    return !isNaN(value) && decimalPlaces(value) <= 2;
    // const regexp = /^\s*-?(\d+(\.\d{1,2})?|\.\d{1,2})\s*$/;
    // return regexp.test(value);
};

const filterInteger = value => {
    const regexp = /^(?:[1-9]\d*|\d)$/;
    return regexp.test(value);
};

export default class TextInput extends Component {
    render() {
        const {
            label,
            value,
            type,
            placeholder,
            style,
            number,
            integer
        } = this.props;
        return (
            <div style={{ marginTop: 10, marginBottom: 10 }}>
                {label ? <p>label</p> : null}
                <input
                    placeholder={placeholder || ""}
                    onKeyDown={e => {
                        try {
                            if (e.key == "Enter") {
                                this.props.onSubmit();
                            }
                            if (e.key == "Escape") {
                                this.props.onEscape()();
                            }
                        } catch (err) {}
                    }}
                    onChange={e => {
                        if (!this.props.onChangeText) {
                            return;
                        }
                        var value = e.target.value;

                        // if number, filter
                        if (number) {
                            if (filterNumber(value)) {
                                this.props.onChangeText(value);
                            }
                            return;
                        }
                        if (integer) {
                            if (filterInteger(value)) {
                                this.props.onChangeText(value);
                            }
                            return;
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
