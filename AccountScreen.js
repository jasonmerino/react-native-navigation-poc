import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import Touchable from "./Touchable";

export default class AccountScreen extends Component {
  static navigationOptions = {
    title: "Account"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageName}>Account Screen</Text>
      </View>
    );
  }
}
