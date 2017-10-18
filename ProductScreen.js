import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import Touchable from "./Touchable";

export default class ProductScreen extends Component {
  count = 1;

  componentDidMount() {
    this.props.navigator.setTitle({ title: "Product SKU" });
    this.props.navigator.setSubTitle({ subtitle: `BCI-${this.count}` });
    this.props.navigator.toggleTabs({ to: "hidden" });
  }

  componentWillUnmount() {
    this.props.navigator.toggleTabs({ to: "shown" });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageName}>Product Screen</Text>
        <Touchable
          onPress={() => {
            this.count++;
            this.props.navigator.setSubTitle({ subtitle: `BCI-${this.count}` });
          }}
        >
          UPDATE SUBTITLE
        </Touchable>
        <Touchable
          onPress={() => {
            this.props.navigator.pop({ animated: false });
            this.props.navigator.pop();
          }}
        >
          POP 2
        </Touchable>
      </View>
    );
  }
}
