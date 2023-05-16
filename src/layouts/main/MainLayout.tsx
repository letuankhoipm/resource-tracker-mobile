import React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import HomeScreen from '../../screens/home/HomeScreen';
import WelcomeScreen from '../../screens/welcome/WelcomeScreen';
import RequestScreen from '../../screens/requests/RequestScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from 'native-base';
import SettingScreen from '../../screens/settings/SettingScreen';

interface NavigationProps {
  navigation: any;
  state: any;
  descriptors: any;
}
function generateLabel(name: string): string {
  switch (name) {
    case 'home-variant-outline':
      return 'Home';
    case 'email-send-outline':
      return 'Request';
    case 'cog-outline':
      return 'Setting';
    case 'bell-outline':
      return 'Inform';

    default:
      return '';
  }
}

function TabBar(props: NavigationProps): JSX.Element {
  const {state, navigation} = props;

  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;
        const icon = route.name;
        const label = generateLabel(route.name);

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key={index} style={[styles.mainItemContainer]}>
            <Pressable onPress={onPress}>
              <View style={styles.insidePressable}>
                <MaterialCommunityIcons
                  name={icon}
                  size={28}
                  color={isFocused ? '#42BFB0' : '#485370'}
                />
                <Text
                  color={isFocused ? '#42BFB0' : '#485370'}
                  style={styles.textNavigate}>
                  {label}
                </Text>
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}

function MainLayout(): JSX.Element {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={'HomeScreen'}
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={(props: NavigationProps) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="home-variant-outline" component={HomeScreen} />
      <Tab.Screen name="email-send-outline" component={RequestScreen} />
      <Tab.Screen name="bell-outline" component={WelcomeScreen} />
      <Tab.Screen name="cog-outline" component={SettingScreen} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#202938',
    borderRadius: 7,
    marginHorizontal: 15,
  },

  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 1,
    borderColor: '#333B42',
  },

  pressableBtn: {
    borderRadius: 20,
    backgroundColor: 'red',
  },

  insidePressable: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 15,
  },

  textNavigate: {
    fontWeight: 'bold',
  },
});

export default MainLayout;
