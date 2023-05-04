import React from 'react';

import {View} from 'react-native';

import {Button, Center, NativeBaseProvider} from 'native-base';

function Welcome({navigation}: any): JSX.Element {
  return (
    <View>
      <NativeBaseProvider>
        <Center
          bg="primary.400"
          _text={{
            color: 'white',
            fontWeight: 'bold',
          }}
          height="32"
          width="40"
          shadow={2}>
          Welcome Screen
          <Button onPress={() => navigation.navigate('Home', {name: 'Jane'})} />
        </Center>
      </NativeBaseProvider>
    </View>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default Welcome;
