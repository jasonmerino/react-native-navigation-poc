import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import Touchable from "./Touchable";

export default class CartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageName}>Cart Screen</Text>
        <Touchable
          onPress={() =>
            this.props.navigator.showModal({
              screen: "app.CheckoutScreen"
            })}
        >
          Checkout
        </Touchable>
      </View>
    );
  }
}
