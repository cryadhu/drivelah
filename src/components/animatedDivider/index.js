import React from "react";
import { Animated } from "react-native";

import styles from "./styles";
export default function AnimatedDivider(props) {
  const { finalWidth, leftDivider, style } = props;
  return (
    <Animated.View
      style={[
        styles({
          width: finalWidth,
        }).divider,
        {
          transform: [
            {
              translateX: leftDivider,
            },
          ],
        },
        style,
      ]}
    />
  );
}
