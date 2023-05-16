import React, {useEffect, useState} from 'react';
import {
  Badge,
  Box,
  Center,
  Divider,
  Flex,
  Input,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Pressable, StyleSheet} from 'react-native';
import KitStyles from '../../styles/kit.style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAppDispatch} from '../../redux/hook';
import requestService from '../../services/request.service';
import {formatDate} from '../../utils/date.util';
import {generateColor} from '../../utils/common.util';

function RequestScreen({navigation}: any): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getListRequest();
    });
    return unsubscribe;
  }, [dispatch, navigation]);

  const [listRequest, setListRequest] = useState([]);

  const getListRequest = (): void => {
    requestService.getMyLeaveRequests().then((res: any) => {
      setListRequest(res.items);
    });
  };

  const onPress = (): void => {};
  const onRequest = (): void => {
    navigation.navigate('NewRequestScreen', {name: 'NewRequestScreen'});
  };

  return (
    <SafeAreaView style={styles.homeBg}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Box flex="1" style={styles.userSection}>
          <Flex direction="row-reverse">
            <Center style={styles.wrapper} height={'100%'}>
              <Box>
                <Pressable onPress={() => onRequest()}>
                  <MaterialCommunityIcons
                    name="plus"
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
                  LEAVE REQUEST
                </Text>
                <Text color="#ffffff">
                  Remote, leave paid and other leave reason.
                </Text>
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

        <Box py="2" flex="1">
          {listRequest?.map((item: any) => (
            <Box key={item.id} style={styles.leaveCard}>
              <VStack space="4" divider={<Divider />}>
                <Box px="4">
                  <Flex direction="row">
                    <Box width={'60%'}>
                      <Box>
                        <Text style={styles.leaveType} color="#e2e2e2">
                          {item.workingType}
                        </Text>
                      </Box>
                    </Box>
                    <Box width={'40%'}>
                      <Text style={styles.requestStatus}>
                        <Badge
                          colorScheme={generateColor(item.status)}
                          alignSelf="center"
                          variant={'outline'}>
                          {item.status}
                        </Badge>
                      </Text>
                    </Box>
                  </Flex>
                  <Text style={styles.leaveDate} color="#ffffff">
                    {formatDate(item.dateFrom)} - {formatDate(item.dateTo)}
                  </Text>
                  <Text style={styles.leaveOwner} color="#ffffff">
                    {item.createdBy.fullName}
                  </Text>
                </Box>
              </VStack>
            </Box>
          ))}
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
});

export default RequestScreen;
