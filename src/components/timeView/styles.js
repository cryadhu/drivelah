import { StyleSheet } from "react-native";
import { windowBackground, textColor, yellow } from "../../assets/colors";

export default StyleSheet.create({
  container: {
    backgroundColor: windowBackground,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 18,
  },
  date: {
    color: textColor,
    fontSize: 14,
    fontFamily: "Museo-300",
    lineHeight: 24,
  },
  timeContainer: {
    backgroundColor: yellow,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginTop: 2,
  },
  time: {
    color: textColor,
    fontSize: 18,
    fontFamily: "Museo-700",
    lineHeight: 24,
    marginHorizontal: 11,
    marginVertical: 5,
  },
  center: {
    alignItems: "center",
    zIndex: 2,
  },
  vDivider: {
    backgroundColor: textColor,
    width: 1,
    height: 14,
  },
  ball: {
    backgroundColor: yellow,
    height: 12,
    width: 12,
    borderRadius: 6,
  },
  slideToSelect:{
    color: textColor,
    fontSize: 14,
    fontFamily: "Museo-300",
    lineHeight: 14,
    marginVertical: 10,
  }
});
