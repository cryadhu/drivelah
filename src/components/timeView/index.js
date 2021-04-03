import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import moment from "moment";

import { string } from "../../assets/strings";
import styles from "./styles";

export default function TimeView(props) {
  const { currentDate } = props;
  const [selectedTime, setSelectedTime] = useState(moment().format("h:mm A"));
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{currentDate.format("Do MMM")}</Text>
      <View style={styles.center}>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{selectedTime}</Text>
        </View>
        <View style={styles.vDivider}/>
        <View style={styles.ball}/>
      </View>
    </View>
  );
}
