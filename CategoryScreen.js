import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import Touchable from "./Touchable";

export default class CategoryScreen extends Component {
  static navigatorStyle = {
    navBarCustomView: "app.NavigationBar.SearchHeader",
    navBarCustomViewInitialProps: {
      withBackButton: true
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageName}>Category Screen</Text>
        <Touchable
          onPress={() =>
            this.props.navigator.push({
              screen: "app.ProductDropsScreen",
              title: "Product Drops"
            })}
        >
          PUSH
        </Touchable>
        <Touchable onPress={() => this.props.navigator.pop()}>POP</Touchable>
        <Touchable
          onPress={() => {
            this.props.navigator.pop({ animated: false });
            this.props.navigator.push({
              screen: "app.ProductDropsScreen",
              animated: false,
              title: "Product Drops"
            });
          }}
        >
          REPLACE
        </Touchable>
      </View>
    );
  }
}
