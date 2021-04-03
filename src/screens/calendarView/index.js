import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import { useSelector } from "react-redux";

import { string } from "../../assets/strings";
import DateTimeSelector from "../../components/dateTimeSelector";
import Header from "../../components/header";

import styles from "./styles";

export default function DateSelection(props) {
  const { navigation, route } = props;
  const { params } = route;

  const pickup = useSelector((state) => state.picker.pickup);
  const dropOff = useSelector((state) => state.picker.dropOff);

  return (
    <View style={styles.container}>
      <Header onBack={navigation.goBack} title={string("calendarView.title")} />
      <DateTimeSelector
        pickup={pickup}
        dropOff={dropOff}
        currentTab={params.key}
      />
    </View>
  );
}
