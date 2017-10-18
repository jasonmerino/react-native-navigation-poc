import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking
} from "react-native";
import styles from "./styles";
import Touchable from "./Touchable";
import { Navigation } from "react-native-navigation";
import navigationUtils from "./utils/navigationUtils";

const TABS = {
  SHOP: 0,
  CART: 1,
  ACCOUNT: 2
};

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    Linking.addEventListener("url", this.handleUrl);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  componentDidMount() {
    this.props.navigator.setStyle({
      navBarCustomView: "app.NavigationBar.SearchHeader"
    });
  }

  componentWillUnmount() {
    Linking.removeEventListener("url", this.handleUrl);
  }

  handleUrl = ({ url }) => {
    if (url) {
      Navigation.handleDeepLink({
        link: url
      });
    }
  };

  onNavigatorEvent = event => {
    if (event && event.type === "DeepLink") {
      this.handleDeepLink(event);
    }
  };

  handleDeepLink = event => {
    let url =
      typeof event.link === "string" && event.link.replace("rnnavpoc://", "");
    if (url.indexOf("/") !== 0) {
      url = `/${url}`;
    }
    if (navigationUtils.pageURLPatterns.P_PAGE.test(url)) {
      this.props.navigator.switchToTab({ tabIndex: 0 });
      this.props.navigator.push({ screen: "app.ProductScreen" });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageName}>Home Screen</Text>
        <Touchable
          onPress={() =>
            this.props.navigator.push({
              screen: "app.CategoryScreen"
            })}
        >
          PUSH
        </Touchable>
        <Touchable
          onPress={() =>
            this.props.navigator.switchToTab({
              tabIndex: TABS.ACCOUNT
            })}
        >
          ACCOUNT TAB
        </Touchable>
      </View>
    );
  }
}
