import { StyleSheet } from "react-native";
import { windowBackground, textColor } from "../../assets/colors";

export default styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 21,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: windowBackground,
  },
  backIcon: {
    height: 18,
    width: 18,
  },
  title: {
    color: textColor,
    fontSize: 20,
    fontFamily: "Museo-500",
    lineHeight: 24,
    marginLeft: 21,
  },
});
