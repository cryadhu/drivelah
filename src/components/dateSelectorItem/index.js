import React from "react";
import { Text } from "react-native";

import Clickable from "../clickable";
import styles from "./styles";

const DateSelectorItem = (props) => {
  const { title, message, onPress, style } = props;
  return (
    <Clickable style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </Clickable>
  );
};

export default DateSelectorItem;
