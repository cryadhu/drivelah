import React, { useState, useRef, useEffect } from "react";
import { View, Image, Text } from "react-native";
import moment from "moment";
import Ruler from "../ruler";

import { textColor } from "../../assets/colors";
import { string } from "../../assets/strings";
import styles from "./styles";

export default function TimeView(props) {
  const { currentDate } = props;
  const [selectedTime, setSelectedTime] = useState(moment().format("h:mm A"));
  const [selectedTimeValue, setSelectedTimeValue] = useState(0);
  const ruler = useRef(null);

  useEffect(() => {
    const now = moment();
    let hour = now.hour();
    let minute = now.minute();
    if (minute < 15) {
      minute = 0;
    } else if (minute >= 15 && minute < 45) {
      minute = 0;
      hour += 0.5;
    } else {
      minute = 0;
      hour += 1;
    }
    const val = Math.round(hour * 2)
    ruler.current.move(val);
  }, []);

  const onChangeValue = (val) => {
    console.log(val);
    const startOfDay = moment().clone().startOf("day");
    startOfDay.add(val * 30, "minutes");
    setSelectedTime(startOfDay.format("hh:mm A"));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{currentDate.format("Do MMM")}</Text>
      <View style={styles.center}>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{selectedTime}</Text>
        </View>
        <View style={styles.vDivider} />
        <View style={styles.ball} />
      </View>
      <Ruler
        style={{ marginTop: -5 }}
        height={40}
        vertical={false}
        onChangeValue={onChangeValue}
        minimum={0}
        maximum={46}
        segmentWidth={1}
        segmentSpacing={35}
        step={2}
        stepColor={textColor}
        stepHeight={20}
        normalColor={textColor}
        normalHeight={12}
        ref={ruler}
      />
    </View>
  );
}
