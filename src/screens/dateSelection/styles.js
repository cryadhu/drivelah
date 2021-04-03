import { StyleSheet } from "react-native";
import { windowBackground, textColor } from "../../assets/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: windowBackground,
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  title: {
    color: textColor,
    fontSize: 20,
    fontFamily: "Museo-500",
    lineHeight: 24,
  },
  pickup: {
    marginTop: 38,
  },
  dropOff:{
    marginTop: 10,
  }
});
