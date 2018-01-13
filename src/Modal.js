//@flow
import React, { Component } from "react";
import { colors } from "./styles";
import Modal from "react-modal";
import Text from "./Text";

export default class ModalComponent extends Component {
    render() {
        const { modalVisible } = this.props;
        return (
            <Modal
                isOpen={modalVisible}
                onAfterOpen={() => {}}
                onRequestClose={() => {}}
                contentLabel="Modal"
            >
                {this.props.children}
            </Modal>
        );
    }
}

const customStyle = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.75)"
    },
    content: {
        position: "absolute",
        top: "40px",
        left: "40px",
        right: "40px",
        bottom: "40px",
        border: "1px solid #ccc",
        background: "#fff",
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
        borderRadius: "4px",
        outline: "none",
        padding: "20px"
    }
};
