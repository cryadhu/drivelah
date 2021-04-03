import React, { useState, useEffect, useRef } from "react";
import { View, Image, Text, Dimensions, Animated } from "react-native";
import { formatDateTime } from "../../utils/dateUtils";

import DateTimeHeaderItem from "../dateTimeHeaderItem";
import AnimatedDivider from "../animatedDivider";
import CalendarView from "../calendarView";
import { string } from "../../assets/strings";

import styles from "./styles";
import TimeView from "../timeView";

const { width } = Dimensions.get("screen");
const TABS = {
  PICKUP: 0,
  DROP_OFF: 1,
};

const finalWidth = width / 2 - 5;

export default function DateTimeSelector(props) {
  const { pickup, dropOff } = props;
  const [selectedPickup, setSelectedPickup] = useState(pickup);
  const [selectedDropOff, setSelectedDropOff] = useState(dropOff);
  const [selectedTab, setSelectedTab] = useState(TABS.PICKUP);

  const leftDivider = useRef(new Animated.Value(0)).current;

  const animateDivider = (to) => {
    Animated.timing(leftDivider, {
      toValue: to,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const onChangeDate = (date) => {
    if (selectedTab === TABS.PICKUP) {
      const pickupDate = date.clone();
      pickupDate.set({
        h: selectedPickup.hours(),
        m: selectedPickup.minutes(),
      });
      setSelectedPickup(pickupDate);
    } else {
      const dropOffDate = date.clone();
      dropOffDate.set({
        h: selectedDropOff.hours(),
        m: selectedDropOff.minutes(),
      });
      setSelectedDropOff(dropOffDate);
    }
  };

  const getSelectedDate = () => {
    if (selectedTab === TABS.PICKUP) {
      return selectedPickup;
    }
    return selectedDropOff;
  };

  const onTimeChanged = (val) => {
    if (selectedTab === TABS.PICKUP) {
      const pickupDate = selectedPickup.clone();
      pickupDate.set({ h: val.hours(), m: val.minutes() });
      setSelectedPickup(pickupDate);
    } else {
      const dropOffDate = selectedDropOff.clone();
      dropOffDate.set({ h: val.hours(), m: val.minutes() });
      setSelectedDropOff(dropOffDate);
    }
  };

  return (
    <View>
      <View>
        <View style={styles().container}>
          <DateTimeHeaderItem
            dateTime={formatDateTime(selectedPickup)}
            title="Pickup Date & Time"
            selected={selectedTab === TABS.PICKUP}
            onPress={() => {
              animateDivider(0);
              setSelectedTab(TABS.PICKUP);
            }}
          />
          <DateTimeHeaderItem
            dateTime={formatDateTime(selectedDropOff)}
            title="Drop-off Date & Time"
            selected={selectedTab === TABS.DROP_OFF}
            onPress={() => {
              animateDivider(finalWidth);
              setSelectedTab(TABS.DROP_OFF);
            }}
          />
        </View>
        <AnimatedDivider
          finalWidth={finalWidth}
          leftDivider={leftDivider}
          style={styles.divider}
        />
      </View>
      <Text style={styles().pickerTitle}>
        {selectedTab === TABS.PICKUP
          ? string("picker.pickupDate")
          : string("picker.dropOffDate")}
      </Text>
      <CalendarView
        onChangeDate={onChangeDate}
        currentDate={getSelectedDate()}
      />
      <Text style={styles().pickerTitle}>
        {selectedTab === TABS.PICKUP
          ? string("picker.pickupTime")
          : string("picker.dropOffTime")}
      </Text>
      <TimeView
        currentDate={getSelectedDate()}
        onTimeChanged={onTimeChanged}
      />
    </View>
  );
}
