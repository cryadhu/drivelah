import { StyleSheet } from "react-native";
import {
  white,
  textColor,
  secondaryTextColor,
  borderColor,
} from "../../assets/colors";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    paddingLeft: 10,
    borderColor: borderColor,
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 6,
  },
  title: {
    color: secondaryTextColor,
    fontSize: 12,
    fontFamily: "Museo-300",
    lineHeight: 24,
  },
  message: {
    color: textColor,
    fontSize: 18,
    fontFamily: "Museo-500",
    lineHeight: 24,
    marginTop: 4,
  },
});
