import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import Clickable from "../clickable";

import styles from "./styles";

export default function DateTimeHeaderItem(props) {
  const { dateTime, title, selected, onPress } = props;

  return (
    <Clickable style={styles().container} onPress={onPress}>
      <Text style={styles({ selected }).dateTime}>{dateTime}</Text>
      <Text style={styles({ selected }).title}>{title}</Text>
    </Clickable>
  );
}
