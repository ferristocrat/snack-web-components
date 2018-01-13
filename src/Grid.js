//@flow
import React, { PropTypes, Component } from "react";

import View from "./View";
import TextInput from "./TextInput";
import Button from "./Button";
import Text from "./Text";
import styles from "./styles";

const createItemFromSchema = schema => {
    var ret = {};
    schema.forEach(key => {
        ret[key] = "";
    });
    return ret;
};

export default class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.onChangeItem = this.onChangeItem.bind(this);
    }
    componentDidMount() {
        if (this.props.data) {
            this.setState({ data: this.props.data });
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.data) {
            this.setState({ data: nextProps.data });
        }
    }
    onChangeItem(index, item) {
        var newData = this.state.data.slice();
        newData[index] = item;
        this.setState({ data: newData });
        this.handleChange(newData);
    }
    handleChange(newData) {
        this.props.onChange(newData);
    }
    render() {
        const { schema, label } = this.props;
        const { data } = this.state;
        return (
            <View>
                <Text center>{label || "Grid"}</Text>
                <hr />
                <View
                    style={{
                        ...styles.flexRow
                        // width: 300
                    }}
                >
                    {schema.map((key, i) => {
                        return (
                            <View
                                style={{
                                    flex: 1,
                                    width: 100,
                                    margin: 5
                                }}
                                key={key}
                            >
                                <Text small bold center>
                                    {key}
                                </Text>
                            </View>
                        );
                    })}
                </View>
                <View>
                    {(data || []).map((item, i) => {
                        return (
                            <View
                                key={i}
                                style={{
                                    ...styles.flexRow
                                    // width: 300
                                }}
                            >
                                {schema.map((key, j) => {
                                    return (
                                        <TextInput
                                            style={{
                                                flex: 1,
                                                width: 100,
                                                margin: 5
                                            }}
                                            key={j}
                                            value={item[key]}
                                            onChangeText={value => {
                                                var update = {};
                                                update = { ...item };
                                                update[key] = value;
                                                this.onChangeItem(i, update);
                                            }}
                                        />
                                    );
                                })}
                            </View>
                        );
                    })}
                </View>

                <View style={{ ...styles.flexRow }}>
                    <Button
                        label="Add"
                        onPress={() => {
                            var newData = this.state.data.slice();
                            newData.push(
                                createItemFromSchema(this.props.schema)
                            );
                            this.setState({
                                data: newData
                            });
                            this.handleChange(newData);
                        }}
                    />
                    <Button
                        label="Remove"
                        onPress={() => {
                            if (this.state.data.length < 1) {
                                return;
                            }
                            var newData = this.state.data.slice();
                            newData.pop();
                            this.setState({
                                data: newData
                            });
                            this.handleChange(newData);
                        }}
                    />
                </View>
            </View>
        );
    }
}
