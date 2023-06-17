import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import IconMaterial from "react-native-vector-icons/MaterialIcons";

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
        tabBarActiveTintColor: "#FF4C46",
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
              iconName = "cafe-sharp";
              break;
            case "Alimentos":
              return (
                <IconMaterial name={"bakery-dining"} size={35} color={color} />
              );
            case "Notificações":
              iconName = "notifications";
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
