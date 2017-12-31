//@flow
import React, { Component } from "react";
import View from "./View";
export default class TouchableHighlight extends Component {
    render() {
        return (
            <View
                className="touchable-highlight"
                onPress={this.props.onPress}
                style={{
                    cursor: "pointer",
                    display: "flex",
                    padding: 5,
                    ...this.props.style
                }}
            >
                {this.props.children}
            </View>
        );
    }
}
