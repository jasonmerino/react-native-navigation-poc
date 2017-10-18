import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import Touchable from "./Touchable";

export default class ProductDropsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageName}>Product Drops Screen</Text>
        <Touchable
          onPress={() =>
            this.props.navigator.push({
              screen: "app.ProductScreen"
            })}
        >
          PUSH
        </Touchable>
        <Touchable onPress={() => this.props.navigator.popToRoot()}>
          POP TO TOP
        </Touchable>
      </View>
    );
  }
}
