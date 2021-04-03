import React, { useState, useEffect } from "react";
import { View, Platform } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import moment from "moment";

import { yellow } from "../../assets/colors";
import styles from "./styles";

const commonColor = "#026786";
LocaleConfig.locales["en"] = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"],
};
LocaleConfig.defaultLocale = "en";

const calenderCustomStyle = {
  arrowColor: commonColor,
  dayTextColor: commonColor,
  todayTextColor: commonColor,
  "stylesheet.day.basic": {
    text: {
      color: commonColor,
      fontFamily: "Museo-500",
      fontSize: 18,
      marginTop: Platform.OS === "android" ? 4 : 6,
    },
  },
  "stylesheet.calendar.header": {
    dayHeader: {
      color: commonColor,
      fontFamily: "Museo-300",
      marginBottom: 10,
    },
    monthText: {
      color: commonColor,
      fontFamily: "Museo-500",
      fontSize: 20,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 6,
      alignItems: "center",
      marginBottom: 10,
    },
  },
};

const today = moment().format("YYYY-MM-DD");
const isDatesBeforeToday = (date) => {
  if (date.isBefore(moment(today))) {
    const newDay = moment(date).add(1, "days");
    return [date.format("YYYY-MM-DD"), ...isDatesBeforeToday(newDay)];
  }
  return [];
};

export default function CalendarView(props) {
  const { currentDate, onChangeDate } = props;
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD")
  );

  useEffect(() => {
    if (currentDate) {
      setSelectedDate(currentDate.format("YYYY-MM-DD"));
    }
  }, [currentDate]);

  const setDate = (date) => {
    const { dateString } = date;
    setSelectedDate(dateString);
    onChangeDate(moment(dateString));
  };

  const getPreviousDateStyle = (item) => {
    return {
      customStyles: {
        text: {
          color: commonColor,
          fontFamily: "Museo-300",
          fontSize: 18,
          opacity: 0.5,
        },
      },
    };
  };

  const firstDay = moment().clone().startOf("month");
  const previousDates = isDatesBeforeToday(firstDay);
  const previousDatesStyle = {};
  previousDates.forEach((item) => {
    previousDatesStyle[item] = getPreviousDateStyle(item);
  });

  return (
    <View style={styles.container}>
      <Calendar
        theme={calenderCustomStyle}
        hideExtraDays={true}
        onDayPress={setDate}
        markingType={"custom"}
        markedDates={{
          [selectedDate]: {
            selected: true,
            customStyles: {
              container: {
                backgroundColor: yellow,
                borderRadius: 4,
              },
              text: {
                color: commonColor,
                fontFamily: "Museo-900",
                fontSize: 18,
              },
            },
          },
          ...previousDatesStyle,
        }}
      ></Calendar>
    </View>
  );
}
