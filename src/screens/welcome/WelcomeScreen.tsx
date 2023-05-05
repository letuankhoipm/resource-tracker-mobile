import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {
  ArrowForwardIcon,
  Button,
  Center,
  Image,
  NativeBaseProvider,
  extendTheme,
} from 'native-base';
import KitStyles from '../../styles/kit.style';

function WelcomeScreen({navigation}: any): JSX.Element {
  const theme = extendTheme({
    fontConfig: {
      Roboto: {
        100: {
          normal: 'Roboto-Light',
          italic: 'Roboto-LightItalic',
        },
        200: {
          normal: 'Roboto-Light',
          italic: 'Roboto-LightItalic',
        },
        300: {
          normal: 'Roboto-Light',
          italic: 'Roboto-LightItalic',
        },
        400: {
          normal: 'Roboto-Regular',
          italic: 'Roboto-Italic',
        },
        500: {
          normal: 'Roboto-Medium',
        },
        600: {
          normal: 'Roboto-Medium',
          italic: 'Roboto-MediumItalic',
        },
      },
    },

    fonts: {
      heading: 'Roboto',
      body: 'Roboto',
      mono: 'Roboto',
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <ImageBackground
        source={require('../../assets/bg.png')}
        resizeMode="cover"
        style={styles.appBg}>
        <Text style={styles.appVersion}>v0.1-beta</Text>
        <View style={styles.appContainer}>
          <Center height="85%" width="100%" shadow={2}>
            <Image
              style={styles.appLogo}
              source={require('../../assets/logo.png')}
              alt="logo_qkit"
              size="xl"
            />
            <Text style={styles.appSubtitle}>Welcome</Text>
            <Text style={styles.appNameTitle}>Resource Tracker</Text>
            <Text style={styles.appIntro}>
              Discover application and send LEAVE REQUEST of everyday. Available
              on Mobile
            </Text>
          </Center>
          <Button
            style={KitStyles.primaryBtn}
            endIcon={<ArrowForwardIcon />}
            onPress={() =>
              navigation.navigate('LoginScreen', {name: 'LoginScreen'})
            }>
            <Text style={KitStyles.textInsideBtn}>get started</Text>
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

export default WelcomeScreen;
