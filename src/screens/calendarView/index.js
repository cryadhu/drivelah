import React from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import {setPickup, setDropOff} from '../../redux/feature/picker/pickerSlicer'

import { string } from "../../assets/strings";
import DateTimeSelector from "../../components/dateTimeSelector";
import Header from "../../components/header";

import styles from "./styles";

export default function DateSelection(props) {
  const { navigation, route } = props;
  const { params } = route;

  const pickup = useSelector((state) => state.picker.pickup);
  const dropOff = useSelector((state) => state.picker.dropOff);
  const dispatch = useDispatch()

  const onSave = (pickupDate, dropOffDate) => {
    dispatch(setPickup(pickupDate))
    dispatch(setDropOff(dropOffDate))
  };

  return (
    <View style={styles.container}>
      <Header onBack={navigation.goBack} title={string("calendarView.title")} />
      <DateTimeSelector
        pickup={pickup}
        dropOff={dropOff}
        currentTab={params.key}
        onSave={onSave}
        goBack={navigation.goBack}
      />
    </View>
  );
}
