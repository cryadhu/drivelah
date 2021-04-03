import { StyleSheet } from "react-native";
import { windowBackground, textColor } from "../../assets/colors";

export default styles = (param) =>
  StyleSheet.create({
    container: {
      backgroundColor: windowBackground,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    pickerTitle: {
      color: textColor,
      fontSize: 18,
      fontFamily: "Museo-900",
      lineHeight: 24,
      marginLeft: 20,
      marginVertical: 10,
    },
  });
