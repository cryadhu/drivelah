import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import DateSelection from "../screens/dateSelection";
import CalendarView from "../screens/calendarView";

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="dateSelection"
          component={DateSelection}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="calendarView"
          component={CalendarView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
