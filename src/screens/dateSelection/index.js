import React, { useState } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

import { string } from "../../assets/strings";
import DateSelectorItem from "../../components/dateSelectorItem";
import { formatDateTime } from "../../utils/dateUtils";

import styles from "./styles";

export default function DateSelection(props) {
  const { navigation } = props;
  const pickup = useSelector((state) => state.picker.pickup);
  const dropOff = useSelector((state) => state.picker.dropOff);

  const navigate = (key) => {
    navigation.navigate("calendarView", {
      key,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{string("dateSelect.title")}</Text>
      <DateSelectorItem
        title={string("dateSelect.pickup")}
        message={formatDateTime(pickup)}
        style={styles.pickup}
        onPress={() => navigate("pickup")}
      />
      <DateSelectorItem
        title={string("dateSelect.dropOff")}
        message={formatDateTime(dropOff)}
        style={styles.dropOff}
        onPress={() => navigate("dropOff")}
      />
    </View>
  );
}
