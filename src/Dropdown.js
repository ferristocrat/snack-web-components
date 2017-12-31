//@flow
import React, { Component } from "react";
import { colors } from "./styles";
import Select from "react-select";

export default class Dropdown extends Component {
    render() {
        return (
            <Select
                name={this.props.placeholder}
                value={this.props.value}
                options={this.props.options}
                style={{ width: this.props.width || 200 }}
                onChange={this.props.onChange}
            />
        );
    }
}
