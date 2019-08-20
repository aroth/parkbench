/**
 * @format
 * @flow
 */

import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions
} from "react-native";

const Entity = props => {
  let Root = View;

  const asset = props.asset;

  const scale = props.scale || asset.scale;
  const width = (props.width || asset.width) / scale;
  const height = (props.height || asset.height) / scale;

  const topOffset = props.topOffset || asset.topOffset || 0;
  const leftOffset = props.leftOffset || asset.leftOffset || 0;

  const onPress = props.onPress;

  if (onPress) {
    Root = TouchableOpacity;
  }

  const screenWidth = Math.round(Dimensions.get("window").width);
  const screenHeight = Math.round(Dimensions.get("window").height);
  const left = (screenWidth - width) / 2 + leftOffset;
  const top = (screenHeight - height) / 2 + topOffset;

  const debug = props.debug || 0;

  return (
    <Root
      onPress={onPress}
      style={{
        left: left,
        top: top,
        position: "absolute",

        width: width,
        height: height,
        borderWidth: debug === 1 ? 2 : 0,
        borderColor: "orange"
      }}
    >
      <Image
        source={{ uri: asset.uri }}
        style={{ width: width, height: height }}
      />
    </Root>
  );
};

export default Entity;
