import React, { useState, useEffect, useRef } from "react";
import { View, Image, Text, Dimensions, Animated } from "react-native";
import { formatDateTime } from "../../utils/dateUtils";

import DateTimeHeaderItem from "../dateTimeHeaderItem";
import AnimatedDivider from "../animatedDivider";
import CalendarView from "../calendarView";
import { string } from "../../assets/strings";

import styles from "./styles";

const { width } = Dimensions.get("screen");
const TABS = {
  PICKUP: 0,
  DROP_OFF: 1,
};

const finalWidth = width / 2 - 5;

export default function DateTimeHeader(props) {
  const { pickup, dropOff } = props;
  const [selectedPickup, setSelectedPickup] = useState(pickup);
  const [selectedDropOff, setSelectedDropOff] = useState(dropOff);
  const [selectedTab, setSelectedTab] = useState(TABS.PICKUP);
  const leftDivider = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (selectedTab === TABS.DROP_OFF) {
      Animated.timing(leftDivider, {
        toValue: finalWidth,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(leftDivider, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [selectedTab]);

  return (
    <View>
      <View>
        <View style={styles().container}>
          <DateTimeHeaderItem
            dateTime={formatDateTime(selectedPickup)}
            title="Pickup Date & Time"
            selected={selectedTab === TABS.PICKUP}
            onPress={() => setSelectedTab(TABS.PICKUP)}
          />
          <DateTimeHeaderItem
            dateTime={formatDateTime(selectedDropOff)}
            title="Drop-off Date & Time"
            selected={selectedTab === TABS.DROP_OFF}
            onPress={() => setSelectedTab(TABS.DROP_OFF)}
          />
        </View>
        <AnimatedDivider
          finalWidth={finalWidth}
          leftDivider={leftDivider}
          style={styles.divider}
        />
      </View>
      <Text style={styles().pickerTitle}>
        {selectedTab === TABS.DROP_OFF
          ? string("picker.pickupDate")
          : string("picker.dropOffDate")}
      </Text>
      <CalendarView />
    </View>
  );
}
