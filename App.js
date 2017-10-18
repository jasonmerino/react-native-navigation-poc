import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Navigation } from "react-native-navigation";

import HomeScreen from "./HomeScreen";
import CartScreen from "./CartScreen";
import AccountScreen from "./AccountScreen";
import CategoryScreen from "./CategoryScreen";
import ProductDropsScreen from "./ProductDropsScreen";
import ProductScreen from "./ProductScreen";
import SearchHeader from "./SearchHeader";
import CheckoutScreen from "./CheckoutScreen";
import styles from "./styles";

// register all screens of the app (including internal ones)
function registerScreens() {
  Navigation.registerComponent(
    "app.NavigationBar.SearchHeader",
    () => SearchHeader
  );
  Navigation.registerComponent("app.HomeScreen", () => HomeScreen);
  Navigation.registerComponent("app.CartScreen", () => CartScreen);
  Navigation.registerComponent("app.AccountScreen", () => AccountScreen);
  Navigation.registerComponent("app.CategoryScreen", () => CategoryScreen);
  Navigation.registerComponent("app.ProductScreen", () => ProductScreen);
  Navigation.registerComponent("app.CheckoutScreen", () => CheckoutScreen);
  Navigation.registerComponent(
    "app.ProductDropsScreen",
    () => ProductDropsScreen
  );
}

registerScreens();

const icon = {};

if (Platform.OS === "android") {
  icon.icon = require("./nav-notifications-icon.png");
}

Navigation.startTabBasedApp({
  tabs: [
    {
      label: "Shop",
      screen: "app.HomeScreen", // this is a registered name for a screen
      ...icon
    },
    {
      label: "Cart",
      screen: "app.CartScreen",
      ...icon,
      // selectedIcon: require('../img/two_selected.png'), // iOS only
      title: ""
    },
    {
      label: "Account",
      screen: "app.AccountScreen",
      ...icon,
      // selectedIcon: require('../img/two_selected.png'), // iOS only
      title: "Account"
    }
  ],
  appStyle: {
    keepStyleAcrossPush: true,
    hideBackButtonTitle: true,
    navBarTextColor: "#000000",
    ...styles.navigatorStyle
  }
});
