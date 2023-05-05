import React from 'react';

import {View} from 'react-native';

import {Button, NativeBaseProvider} from 'native-base';

interface WelcomeProps {
  navigation: any; // replace 'any' with the expected type of the 'navigation' prop
}

function Welcome({navigation}: WelcomeProps): JSX.Element {
  return (
    <View>
      <NativeBaseProvider>
        <Button
          onPress={() => navigation.navigate('WelcomeScreen', {name: 'Jane'})}
        />
      </NativeBaseProvider>
    </View>
  );
}

export default Welcome;
