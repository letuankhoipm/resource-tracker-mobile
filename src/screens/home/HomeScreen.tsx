import React, {useEffect} from 'react';
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Input,
  ScrollView,
  Text,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Pressable, StyleSheet} from 'react-native';
import KitStyles from '../../styles/kit.style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAppDispatch, useAppSelector} from '../../redux/hook';
import {actGetUser} from '../../redux/actions/user.action';

function WelcomeScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(actGetUser());
  }, [dispatch]);

  const userDetail = useAppSelector(
    state => state.userReducer.userDetail.userInfo,
  );

  const BOX_SIZE = '140';
  const onPress = (): void => {};

  return (
    <SafeAreaView style={styles.homeBg}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Box flex="1" style={styles.userSection}>
          <Flex direction="row">
            <Center height={'100%'}>
              <Pressable onPress={onPress}>
                <Avatar alignSelf="center" bg="teal.500" size="md">
                  DH
                </Avatar>
              </Pressable>
            </Center>
            <Center style={styles.nameWrapper} height={'100%'}>
              <Box>
                <Text style={styles.userName} color="#ffffff">
                  {userDetail?.fullName}
                </Text>
                <Text style={styles.userTitle} color="#ffffff">
                  {userDetail?.positions
                    ? userDetail?.positions[0].description
                    : ''}
                </Text>
              </Box>
            </Center>
          </Flex>
        </Box>

        <Box flex="1" style={styles.welcomeSection}>
          <Flex direction="row">
            <Center height={'100%'}>
              <Box>
                <Text style={styles.welcomeText} color="#ffffff">
                  Hey, {userDetail?.fullName}!
                </Text>
                <Text color="#ffffff">How are you today?</Text>
              </Box>
            </Center>
          </Flex>
          <Flex direction="row">
            <Input
              variant="underlined"
              width="100%"
              style={KitStyles.defaultInput}
              InputRightElement={
                <Pressable onPress={onPress}>
                  <MaterialCommunityIcons
                    name="email-search-outline"
                    size={28}
                    color="#42BFB0"
                  />
                </Pressable>
              }
              placeholder="Finding your request"
            />
          </Flex>
        </Box>

        <Box flex="1">
          <Center style={KitStyles.btnWrapper}>
            <Button
              width={'100%'}
              style={KitStyles.primaryBtn}
              onPress={onPress}>
              <Text style={KitStyles.textInsideBtn}>Search</Text>
            </Button>
          </Center>
        </Box>

        <Box flex="1" style={styles.serviceSection}>
          <Flex direction="row">
            <Box>
              <Text style={KitStyles.defaultTitle} color="#ffffff">
                Features
              </Text>
            </Box>
          </Flex>
          <HStack
            style={styles.listBoxWrapper}
            space={3}
            justifyContent="center">
            <Box h={BOX_SIZE} w="50%" style={styles.serviceBox} rounded="md">
              <Flex direction="row-reverse">
                <Box style={KitStyles.iconWrapper}>
                  <MaterialCommunityIcons
                    name="email-send-outline"
                    size={28}
                    color="#42BFB0"
                  />
                </Box>
              </Flex>
              <Flex direction="row">
                <Box>
                  <Text style={KitStyles.defaultTitle} color="#ffffff">
                    Request Leaves
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box h={BOX_SIZE} w="50%" style={styles.serviceBox} rounded="md">
              <Flex direction="row-reverse">
                <Box style={KitStyles.iconWrapper}>
                  <MaterialCommunityIcons
                    name="calendar-outline"
                    size={28}
                    color="#42BFB0"
                  />
                </Box>
              </Flex>
              <Flex direction="row">
                <Box>
                  <Text style={KitStyles.defaultTitle} color="#ffffff">
                    Holiday Policy
                  </Text>
                </Box>
              </Flex>
            </Box>
          </HStack>
          <HStack
            style={styles.listBoxWrapper}
            space={3}
            justifyContent="center">
            <Box h={BOX_SIZE} w="50%" style={styles.serviceBox} rounded="md">
              <Flex direction="row-reverse">
                <Box style={KitStyles.iconWrapper}>
                  <MaterialCommunityIcons
                    name="star-outline"
                    size={28}
                    color="#42BFB0"
                  />
                </Box>
              </Flex>
              <Flex direction="row">
                <Box>
                  <Text style={KitStyles.defaultTitle} color="#ffffff">
                    Appraise Performance
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box h={BOX_SIZE} w="50%" style={styles.serviceBox} rounded="md">
              <Flex direction="row-reverse">
                <Box style={KitStyles.iconWrapper}>
                  <MaterialCommunityIcons
                    name="account-outline"
                    size={28}
                    color="#42BFB0"
                  />
                </Box>
              </Flex>
              <Flex direction="row">
                <Box>
                  <Text style={KitStyles.defaultTitle} color="#ffffff">
                    Profile Management
                  </Text>
                </Box>
              </Flex>
            </Box>
          </HStack>
        </Box>
        <Box style={KitStyles.divider} />
      </ScrollView>
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

  nameWrapper: {
    marginLeft: 15,
  },

  userName: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  userTitle: {fontSize: 12},

  welcomeSection: {
    margin: 15,
  },

  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  serviceSection: {},

  listBoxWrapper: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    marginTop: 5,
  },

  serviceBox: {
    backgroundColor: '#202938',
  },

  versionSection: {},
});

export default WelcomeScreen;
