import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";

import store from "./src/redux/store";
import RootNavigation from "./src/navigation/rootNavigation";
import { windowBackground } from "./src/assets/colors";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Museo-300": require("./src/assets/fonts/MuseoSansRounded300.otf"),
    "Museo-500": require("./src/assets/fonts/MuseoSansRounded500.otf"),
    "Museo-900": require("./src/assets/fonts/MuseoSansRounded900.otf"),
    "Museo-700": require("./src/assets/fonts/MuseoSansRounded700.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <RootNavigation />
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: windowBackground,
  },
});
