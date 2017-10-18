import React from "react";
import PropTypes from "prop-types";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Platform,
  Dimensions
} from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 56,
    justifyContent: "center",
    paddingHorizontal: 5
  },
  input: {
    backgroundColor: "#ffffff",
    ...Platform.select({
      ios: {
        borderWidth: 1,
        borderColor: "#00A499",
        height: 30
      },
      android: {
        height: 40
      }
    })
  }
});

class SearchHeader extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  getWidth = () => {
    let width = Dimensions.get("window").width - 20;
    if (this.props.withBackButton) {
      width = width - 60;
    }
    return width;
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={[
            styles.input,
            {
              width: this.getWidth()
            }
          ]}
          underlineColorAndroid="transparent"
          placeholder="What are you shopping for?"
        />
      </View>
    );
  }
}

export default SearchHeader;
