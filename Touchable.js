import React, { Component } from "react";
import { Platform, StyleSheet, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default class CategoryScreen extends Component {
  static navigationOptions = {
    title: "One"
  };

  render() {
    return (
      <TouchableOpacity {...this.props} style={styles.touchable}>
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}
