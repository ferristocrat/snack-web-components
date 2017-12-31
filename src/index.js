//@flow
import css from "./index.css";
import Button from "./Button.js";
import Image from "./Image.js";
import Text from "./Text.js";
import TextField from "./TextField.js";
import TextInput from "./TextInput.js";
import Toggle from "./Toggle.js";
import View from "./View.js";
import Dropdown from "./Dropdown.js";
import TouchableHighlight from "./TouchableHighlight.js";
import Modal from "./Modal";
import styles from "./styles";

var Module = {
    Button: Button,
    Image: Image,
    Text: Text,
    TextField: TextField,
    TextInput: TextInput,
    View: View,
    TouchableHighlight: TouchableHighlight,
    Toggle: Toggle,
    Dropdown: Dropdown,
    Modal: Modal,
    styles: styles
};
module.exports = Module;

// https://www.npmjs.com/package/npm-package-es6-boilerplate
