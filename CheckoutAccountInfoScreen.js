import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import Touchable from "./Touchable";

export default class CheckoutAccountInfoScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageName}>Checkout Account Info Screen</Text>
      </View>
    );
  }
}
