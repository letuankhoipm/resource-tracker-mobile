import React, {useState, useEffect} from 'react';
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
import {actLogin} from '../../redux/actions/auth.action';
import {LoginPayload} from '../../model/common/payload.model';
import {useAppDispatch, useAppSelector} from '../../redux/hook';

interface NavigationProps {
  navigation: any;
}

function LoginScreen({navigation}: NavigationProps): JSX.Element {
  useEffect(() => {
    if (access_certificate) {
      navigation.navigate('MainLayout', {name: 'MainLayout'});
    }
  });

  const [show, setShow] = React.useState(false);
  const [identity, onChangeIdentity] = useState('');
  const [password, onChangePassword] = useState('');
  const dispatch = useAppDispatch();
  const access_certificate = useAppSelector(state => state.authReducer.token);

  const onLogin = () => {
    const payload: LoginPayload = {
      CCCD: identity,
      password: password,
    };
    dispatch(actLogin(payload));
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
                value={identity}
                onChangeText={onChangeIdentity}
              />
              <Input
                variant="underlined"
                style={KitStyles.defaultInput}
                type={show ? 'text' : 'password'}
                value={password}
                onChangeText={onChangePassword}
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
          <Button style={KitStyles.primaryBtn} onPress={onLogin}>
            <Text style={KitStyles.textInsideBtn}>login</Text>
          </Button>
          {/* <Button
            style={KitStyles.primaryBtn}
            onPress={() => {
              navigation.navigate('MainLayout', {name: 'MainLayout'});
            }}>
            <Text style={KitStyles.textInsideBtn}>test</Text>
          </Button> */}
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
