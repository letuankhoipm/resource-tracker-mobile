import React from 'react';
import {ImageBackground, Text, View, StyleSheet, Pressable} from 'react-native';
import {
  SunIcon,
  Button,
  Center,
  Input,
  NativeBaseProvider,
  Stack,
  theme,
} from 'native-base';
import KitStyles from '../../styles/kit.style';

interface NavigationProps {
  navigation: any;
}

function LoginScreen({navigation}: NavigationProps): JSX.Element {
  const [show, setShow] = React.useState(false);
  const onLogin = () => {
    navigation.navigate('WelcomeScreen', {name: 'WelcomeScreen'});
  };
  return (
    <NativeBaseProvider theme={theme}>
      <ImageBackground
        source={require('../../assets/bg.png')}
        resizeMode="cover"
        style={styles.appBg}>
        <Text style={styles.appVersion}>RESOURCES TRACKER</Text>
        <View style={styles.appContainer}>
          <Center height="85%" width="100%" shadow={2}>
            <Stack space={4} w="80%" maxW="300px" mx="auto">
              <Input
                style={KitStyles.defaultInput}
                variant="underlined"
                placeholder="Identity"
              />
              <Input
                variant="underlined"
                style={KitStyles.defaultInput}
                type={show ? 'text' : 'password'}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <SunIcon />
                  </Pressable>
                }
                placeholder="Password"
              />
            </Stack>
            ;
          </Center>
          <Button style={KitStyles.primaryBtn} onPress={() => onLogin()}>
            <Text style={KitStyles.textInsideBtn}>login</Text>
          </Button>
          <Text style={styles.appDevBy}>DEVELOPED BY</Text>
          <Text style={styles.appSponsor}>
            qkit software © 2023 all rights reserved.
          </Text>
        </View>
      </ImageBackground>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  appNameTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#e3e3e3',
  },

  appSubtitle: {
    fontSize: 17,
    color: '#e3e3e3',
    textTransform: 'uppercase',
  },

  appIntro: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#e3e3e3',
    paddingLeft: 40,
    paddingRight: 40,
  },

  appSponsor: {
    fontSize: 13,
    color: '#e3e3e3',
    marginBottom: 10,
  },

  appVersion: {
    fontSize: 13,
    color: '#e3e3e3',
    marginTop: 5,
    marginRight: 5,
    textAlign: 'right',
  },

  appDevBy: {
    fontSize: 10,
    color: '#e3e3e3',
    fontWeight: 'bold',
  },

  appLogo: {
    marginTop: 20,
    marginBottom: 20,
    opacity: 0.9,
  },

  appBg: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default LoginScreen;
