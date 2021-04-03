import React, { useState, useEffect, useRef } from "react";
import { View, ScrollView, Text, Dimensions, Animated } from "react-native";
import { formatDateTime } from "../../utils/dateUtils";

import DateTimeHeaderItem from "../dateTimeHeaderItem";
import AnimatedDivider from "../animatedDivider";
import CalendarView from "../calendarView";
import { string } from "../../assets/strings";

import styles from "./styles";
import TimeView from "../timeView";
import Clickable from "../clickable";

const { width } = Dimensions.get("screen");
const TABS = {
  PICKUP: 0,
  DROP_OFF: 1,
};
const OFFSET = 5;

const finalWidth = width / 2 - OFFSET;

export default function DateTimeSelector(props) {
  const { pickup, dropOff, currentTab, onSave, goBack } = props;
  const [selectedPickup, setSelectedPickup] = useState(null);
  const [selectedDropOff, setSelectedDropOff] = useState(null);
  const [selectedTab, setSelectedTab] = useState(currentTab);

  const leftDivider = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (currentTab === TABS.DROP_OFF) {
      animateDivider(finalWidth);
    }
  }, [currentTab]);

  useEffect(() => {
    if (pickup) {
      setSelectedPickup(pickup);
    }
    if (dropOff) {
      setSelectedDropOff(dropOff);
    }
  }, []);

  const animateDivider = (to) => {
    Animated.timing(leftDivider, {
      toValue: to,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const onChangeDate = (date) => {
    if (selectedTab === TABS.PICKUP) {
      const pickupDate = date?.clone();
      pickupDate.set({
        h: selectedPickup.hours(),
        m: selectedPickup.minutes(),
      });
      setSelectedPickup(pickupDate);
    } else {
      const dropOffDate = date?.clone();
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
      const pickupDate = selectedPickup?.clone();
      pickupDate?.set({ h: val.hours(), m: val.minutes() });
      setSelectedPickup(pickupDate);
    } else {
      const dropOffDate = selectedDropOff?.clone();
      dropOffDate?.set({ h: val.hours(), m: val.minutes() });
      setSelectedDropOff(dropOffDate);
    }
  };

  const onSavePress = () => {
    onSave(selectedPickup, selectedDropOff);
    goBack();
  };

  return (
    <ScrollView bounces={false}>
      <View>
        <View>
          <View style={styles.container}>
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
        <Text style={styles.pickerTitle}>
          {selectedTab === TABS.PICKUP
            ? string("picker.pickupDate")
            : string("picker.dropOffDate")}
        </Text>
        <CalendarView
          onChangeDate={onChangeDate}
          currentDate={getSelectedDate()}
        />
        <Text style={styles.pickerTitle}>
          {selectedTab === TABS.PICKUP
            ? string("picker.pickupTime")
            : string("picker.dropOffTime")}
        </Text>
        <View style={styles.timeContainer}>
          <TimeView
            currentDate={getSelectedDate()}
            onTimeChanged={onTimeChanged}
          />
          <Clickable style={styles.save} onPress={onSavePress}>
            <Text style={styles.saveText}>{string("action.save")}</Text>
          </Clickable>
        </View>
      </View>
    </ScrollView>
  );
}
