//@flow
import React, { Component } from "react";
import { colors } from "./styles";
import ToggleButton from "react-toggle-button";

export default class Toggle extends Component {
    render() {
        const { value } = this.props;
        return (
            <ToggleButton
                {...this.props}
                colors={{
                    active: {
                        base: colors.green
                    }
                }}
                value={value || false}
                onToggle={value => {
                    this.props.onToggle(!value);
                }}
            />
        );
    }
}
