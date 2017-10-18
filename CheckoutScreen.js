import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import Touchable from "./Touchable";

export default class CheckoutScreen extends Component {
  static navigatorButtons = {
    leftButtons: [
      {
        title: "Close",
        id: "close"
      }
    ]
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event && event.type === "NavBarButtonPress" && event.id === "close") {
      this.props.navigator.dismissModal();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageName}>Checkout Screen</Text>
      </View>
    );
  }
}
