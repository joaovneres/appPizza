import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

// importando páginas
import Home from "../pages/Home";
import Save from "../pages/Save";
import ListPizza from "../pages/ListPizza";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#E85333",
        tabBarInactiveTintColor: "#777",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Pizzas":
              iconName = "pizza";
              break;
            default:
              iconName = "add-circle-outline";
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pizzas" component={ListPizza} />
      <Tab.Screen name="Salvar" component={Save} />
    </Tab.Navigator>
  );
}
