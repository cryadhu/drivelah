import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import { Images } from "../../assets/icons";

import { string } from "../../assets/strings";
import Clickable from "../../components/clickable";

import styles from "./styles";

export default function Header(props) {
  const { style, onBack, title } = props;
  return (
    <Clickable onPress={onBack} style={[styles.container, style]}>
      <Image source={Images.arrowLeft} style={styles.backIcon}/>
      <Text style={styles.title}>{title}</Text>
    </Clickable>
  );
}
