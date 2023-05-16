import React, {useState} from 'react';
import {Box, Button, Center, Flex, Modal, ScrollView, Text} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Pressable, StyleSheet} from 'react-native';
import KitStyles from '../../styles/kit.style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAppDispatch} from '../../redux/hook';
import {actLogout} from '../../redux/actions/auth.action';

function SettingScreen({navigation}: any): JSX.Element {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const onLogout = (): void => {
    setOpen(true);
  };
  const handleLogout = (): void => {
    setOpen(false);
    dispatch(actLogout());
    navigation.navigate('WelcomeScreen', {name: 'WelcomeScreen'});
  };

  return (
    <SafeAreaView style={styles.homeBg}>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        safeAreaTop={true}
        overlayVisible={true}
        backgroundColor={'rgba(0,0,0,0.8)'}>
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Logout</Modal.Header>
          <Modal.Body>
            <Text style={KitStyles.strongText}>
              Are you sure you want to logout?
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                style={KitStyles.secondaryBtn}
                onPress={() => {
                  setOpen(false);
                }}>
                <Text style={KitStyles.textInsideBtnBlack}>cancel</Text>
              </Button>
              <Button
                style={KitStyles.secondaryBtn}
                onPress={() => {
                  handleLogout();
                }}>
                <Text style={KitStyles.textInsideBtnPrimary}>confirm</Text>
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Box flex="1" style={styles.userSection}>
          <Flex direction="row-reverse">
            <Center style={styles.wrapper} height={'100%'}>
              <Box>
                <Pressable onPress={() => onLogout()}>
                  <MaterialCommunityIcons
                    name="logout"
                    size={28}
                    color="#42BFB0"
                  />
                </Pressable>
              </Box>
            </Center>
          </Flex>
        </Box>

        <Box flex="1" style={styles.welcomeSection}>
          <Flex direction="row">
            <Center height={'100%'}>
              <Box>
                <Text style={styles.welcomeText} color="#ffffff">
                  SETTINGS
                </Text>
                <Text color="#ffffff">
                  Logout, setting user interface and other configurations.
                </Text>
              </Box>
            </Center>
          </Flex>
        </Box>
      </ScrollView>
      <Box style={styles.divider} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeBg: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#101626',
  },

  userSection: {
    margin: 15,
  },

  wrapper: {
    marginLeft: 15,
  },

  welcomeSection: {
    margin: 15,
  },

  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  requestStatus: {
    textAlign: 'right',
  },

  leaveCard: {
    marginTop: 20,
    marginHorizontal: 15,
    borderRadius: 5,
    paddingVertical: 10,
    backgroundColor: '#202938',
  },

  leaveDate: {
    fontSize: 17,
    paddingVertical: 10,
    fontWeight: 'bold',
  },

  leaveType: {
    fontSize: 13,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },

  leaveOwner: {fontSize: 12, color: '#42BFB0'},

  divider: {
    height: 135,
  },

  center: {},
});

export default SettingScreen;
