/**
 * @format
 * @flow
 */

import React from "react";
import { View, ImageBackground, TouchableWithoutFeedback } from "react-native";

const Layer = props => {
  let Root = View;
  const onPress = props.onPress;

  if (onPress) {
    Root = TouchableWithoutFeedback;
  }

  return (
    <Root onPress={onPress}>
      <ImageBackground
        resizeMethod={"resize"}
        style={{ height: "100%", width: "100%" }}
        source={{
          uri: props.source
        }}
      >
        {props.children}
      </ImageBackground>
    </Root>
  );
};

export default Layer;
