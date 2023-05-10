import React from 'react';
import {View, Pressable, Dimensions, StyleSheet} from 'react-native';
import HomeScreen from '../../screens/home/HomeScreen';
import WelcomeScreen from '../../screens/welcome/WelcomeScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} = Dimensions.get('window');

interface NavigationProps {
  navigation: any;
  state: any;
}

function TabBar({state, navigation}: NavigationProps): JSX.Element {
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;
        const label = route.name;

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
            <Pressable
              onPress={onPress}
              style={isFocused ? styles.pressableBtn : styles.pressableBtn}>
              <View style={styles.insidePressable}>
                <MaterialCommunityIcons
                  name={label}
                  size={20}
                  color="#007A52"
                />
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
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="email-send" component={WelcomeScreen} />
      <Tab.Screen name="account" component={WelcomeScreen} />
      <Tab.Screen name="cog" component={WelcomeScreen} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#e3e3e3',
    borderRadius: 20,
    marginHorizontal: width * 0.05,
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
    backgroundColor: 'transparent',
  },

  insidePressable: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 15,
  },
});

export default MainLayout;
