//@flow
//////////////////////////////
/////////// Theme ////////////
//////////////////////////////

const blue = "#2FC3FF";
const darkBlue = "#0697D3";
const secondary = "#045993";

const pink = "#FFB2B2";
const orange = "#FC622E";
const purple = "#B99AFF";
const green = "#5FC990";

const lightGreen = "#00D20C";
const gray = "#9B9B9B";
const lightGray = "#EFEFEF";
const darkGray = "#606060";
const underlay = "#F0F0F0";
const white = "rgb(254,254,254)";
const red = "#F05454";
const offWhite = "#FAFAFA";
const text = "#4E4E4E";
const transparent = "rgba(0,0,0,0)";

// secondary colors
const blue2 = "#5AAFF7";
const yellow2 = "#FFBE5F";
const pink2 = "#F75AA2";
const orange2 = "#FF6969";
const dash = "rgb(119, 149, 248)";
const green2 = "#5FC990";

const colors = {
    blue: blue,
    pink: pink,
    orange: orange,
    purple: purple,
    green2: green2,
    primary: blue,
    secondary: secondary,
    darkBlue: darkBlue,
    green: green,
    red: red,
    gray: gray,
    lightGray: lightGray,
    lightGreen: lightGreen,
    darkGray: darkGray,
    underlay: underlay,
    white: white,
    offWhite: offWhite,
    text: text,
    blue2: blue2,
    yellow2: yellow2,
    pink2: pink2,
    orange2: orange2,
    dash: dash,
    transparent: transparent
};

const shadow = {
    boxShadow: "2px 2px 2px 2px rgba(0,0,0,.2)"
};

const shadowLight = {
    boxShadow: "0 2px 4px 0 rgba(0,0,0,0.05)"
};

const shadowLeft = {
    boxShadow: "-2px 0px 4px 0 rgba(0,0,0,0.1)"
};

exports.bottomButton = {
    padding: 15,
    backgroundColor: green,

    shadowColor: "rgb(10,10,10)"
};

const flexCol = {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
};

const flexRow = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
};

const card = {
    backgroundColor: "white",
    padding: 15,
    margin: 20,
    borderRadius: 4,
    boxShadow: "0 7px 14px 0 rgba(50,50,93,.1), 0 3px 6px 0 rgba(0,0,0,.07)"
};

const row = {
    padding: 10,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: lightGray,
    flexDirection: "row"
};

const modal = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(20, 20, 20, 0.5)"
    },
    content: {
        position: "absolute",
        margin: 30,
        ...shadow,
        borderWidth: 0,
        background: "#fff",
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
        borderRadius: 4,
        outline: "none",
        padding: 20
    }
};

const icon = {
    height: 12,
    width: 12,
    padding: 2,
    margin: 2
};

const panelContainer = {
    ...flexRow,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap"
};

const panel = {
    background: "white",
    boxShadow: "0 2px 4px 0 rgba(0,0,0,0.05)",
    borderRadius: 8,
    margin: 10,
    padding: 15,
    alignSelf: "stretch"
};

const bottomBorder = {
    borderColor: colors.lightGray,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderStyle: "solid"
};

const borderDark = {
    borderColor: colors.gray,
    borderWidth: 1,
    borderStyle: "solid"
};

const addButton = {
    backgroundColor: colors.blue,
    color: colors.white,
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 8
};

module.exports = {
    shadowLeft,
    bottomBorder,
    borderDark,
    colors,
    shadow,
    shadowLight,
    flexCol,
    flexRow,
    card,
    row,
    modal,
    icon,
    panel,
    panelContainer,
    addButton
};
