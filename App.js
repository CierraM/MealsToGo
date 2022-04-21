import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme'
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import {Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeArea } from './src/components/utilities/safe-area.component';
import {Ionicons} from '@expo/vector-icons'

import {
  useFonts as useOswald,
  Oswald_400Regular
} from '@expo-google-fonts/oswald'

import {
  useFonts as useLato,
  Lato_400Regular
} from '@expo-google-fonts/lato'

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const SettingsScreen = () => {
    return <SafeArea>
      <Text>Settings</Text>
      </SafeArea>
  }

  const MapScreen = () => {
    return <SafeArea>
      <Text>Map</Text>
      </SafeArea>
  }

  const Tab = createBottomTabNavigator();

  return (

    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name ==='Restaurants') {
                iconName = focused? 'ios-restaurant': 'ios-restaurant-outline';
              } else if (route.name === 'Map') {
                iconName = focused? 'ios-map': 'ios-map-outline';
              } else if (route.name === 'Settings') {
                iconName = focused? 'ios-settings-sharp': 'ios-settings-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        })}>
          <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <ExpoStatusBar style="auto" />
    </ThemeProvider>

  );
}


