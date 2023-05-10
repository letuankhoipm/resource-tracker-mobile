import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Center, Image} from 'native-base';

function WelcomeScreen(): JSX.Element {
  return (
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
          <Text style={styles.appNameTitle}>Home Page</Text>
          <Text style={styles.appIntro}>
            Discover application and send LEAVE REQUEST of everyday. Available
            on Mobile
          </Text>
        </Center>
      </View>
    </ImageBackground>
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
