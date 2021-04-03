import { StyleSheet } from "react-native";
import { windowBackground, textColor } from "../../assets/colors";

export default styles = (props) =>
  StyleSheet.create({
    container: {
      backgroundColor: windowBackground,
      flex: 1,
      paddingHorizontal: 20,
    },
    dateTime: {
      color: textColor,
      fontSize: 18,
      fontFamily: "Museo-500",
      lineHeight: 24,
      opacity: props?.selected ? 1 : 0.6,
    },
    title: {
      color: textColor,
      fontSize: 12,
      fontFamily: "Museo-500",
      lineHeight: 24,
      opacity: 0.75,
      marginBottom: 12,
      opacity: props?.selected ? 1 : 0.4,
    },
  });
