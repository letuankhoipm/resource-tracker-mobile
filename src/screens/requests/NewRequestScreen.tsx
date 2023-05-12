import React, {useEffect, useState} from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Input,
  ScrollView,
  Select,
  Text,
  TextArea,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Platform, Pressable, StyleSheet, View} from 'react-native';
import KitStyles from '../../styles/kit.style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAppDispatch} from '../../redux/hook';
import referenceService from '../../services/reference.service';
import DateTimePicker from '@react-native-community/datetimepicker';

function RequestScreen({navigation}: any): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    getListWorkingType();
  }, [dispatch]);

  const [listWorkingType, setListWorkingType] = useState([]);
  const [workingType, setWorkingType] = useState('ux');
  const [dateFrom, setDateFrom] = useState(new Date(1598051730000));
  const [dateTo, setDateTo] = useState(new Date(1598051730000));
  const [showDateFrom, setShowDateFrom] = useState(false);
  const [showDateTo, setShowTo] = useState(false);
  const [reason, setReason] = useState('');

  const getListWorkingType = (): void => {
    referenceService.getRefsData('working-types').then((res: any) => {
      setListWorkingType(res);
    });
  };

  const onChangeType = (value: string) => {
    setWorkingType(value);
  };

  const showDateToPicker = () => {
    showModeFrom();
  };

  const showDateFromPicker = () => {
    showModeTo();
  };

  const onChangeDateFrom = (event: any, selectedDate: any) => {
    const value = selectedDate;
    setShowDateFrom(false);
    setDateFrom(value);
  };

  const onChangeDateTo = (event: any, selectedDate: any) => {
    const value = selectedDate;
    setShowTo(false);
    setDateTo(value);
  };

  const showModeFrom = () => {
    if (Platform.OS === 'android') {
      setShowDateFrom(true);
    }
  };

  const showModeTo = () => {
    if (Platform.OS === 'android') {
      setShowTo(true);
    }
  };

  const onBack = (): void => {
    navigation.goBack();
  };

  const onSendRequest = (): void => {};
  const onCancel = (): void => {};

  return (
    <SafeAreaView style={styles.homeBg}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Box flex="1" style={styles.userSection}>
          <Flex direction="row-reverse">
            <Center style={styles.wrapper} height={'100%'}>
              <Box>
                <Pressable onPress={() => onBack()}>
                  <MaterialCommunityIcons
                    name="arrow-left"
                    size={28}
                    color="#42BFB0"
                  />
                </Pressable>
              </Box>
            </Center>
          </Flex>
        </Box>

        <Box flex="1" style={styles.sectionWrapper}>
          <Flex direction="row">
            <Center height={'100%'}>
              <Box>
                <Text style={styles.welcomeText} color="#ffffff">
                  NEW REQUEST
                </Text>
                <Text color="#ffffff">
                  Fill your information to create a new request.
                </Text>
              </Box>
            </Center>
          </Flex>
        </Box>

        <Box flex="1" style={styles.sectionWrapper}>
          <Flex direction="row">
            <FormControl width={'100%'} isRequired>
              <Select
                my={'4'}
                minWidth="200"
                fontSize={'14'}
                color={'#ffffff'}
                variant="underlined"
                dropdownIcon={
                  <MaterialCommunityIcons
                    name="chevron-down"
                    size={28}
                    color="#42BFB0"
                  />
                }
                accessibilityLabel="Request Type"
                placeholder="Working/Leave Type"
                selectedValue={workingType}
                onValueChange={(itemValue: string) => onChangeType(itemValue)}>
                {listWorkingType?.map((item: any) => (
                  <Select.Item
                    key={item.id}
                    color={'#ffffff'}
                    label={item.description}
                    value={item.value}
                  />
                ))}
              </Select>

              <Select
                my={'4'}
                minWidth="200"
                fontSize={'14'}
                color={'#ffffff'}
                variant="underlined"
                dropdownIcon={
                  <MaterialCommunityIcons
                    name="chevron-down"
                    size={28}
                    color="#42BFB0"
                  />
                }
                accessibilityLabel="Request Type"
                placeholder="Working Shift"
                selectedValue={workingType}
                onValueChange={(itemValue: string) => onChangeType(itemValue)}>
                {listWorkingType?.map((item: any) => (
                  <Select.Item
                    key={item.id}
                    color={'#ffffff'}
                    label={item.description}
                    value={item.value}
                  />
                ))}
              </Select>

              <View>
                <Input
                  my={'4'}
                  value={dateFrom.toLocaleString()}
                  variant="underlined"
                  width="100%"
                  isReadOnly={true}
                  InputRightElement={
                    <Pressable onPress={showDateFromPicker}>
                      <MaterialCommunityIcons
                        name="calendar-outline"
                        size={28}
                        color="#42BFB0"
                      />
                    </Pressable>
                  }
                  style={KitStyles.defaultInput}
                  placeholder="Working Shift"
                />
                {showDateFrom && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={dateFrom}
                    mode={'date'}
                    is24Hour={true}
                    onChange={onChangeDateFrom}
                  />
                )}
              </View>

              <View>
                <Input
                  my={'4'}
                  value={dateTo.toLocaleString()}
                  variant="underlined"
                  width="100%"
                  isReadOnly={true}
                  InputRightElement={
                    <Pressable onPress={showDateToPicker}>
                      <MaterialCommunityIcons
                        name="calendar-outline"
                        size={28}
                        color="#42BFB0"
                      />
                    </Pressable>
                  }
                  style={KitStyles.defaultInput}
                  placeholder="Working Shift"
                />
                {showDateTo && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={dateTo}
                    mode={'date'}
                    is24Hour={true}
                    onChange={onChangeDateTo}
                  />
                )}
              </View>

              <TextArea
                value={reason}
                placeholder="Reason for request"
                style={KitStyles.defaultInput}
                onChangeText={text => setReason(text)}
                w="100%"
                variant={'underlined'}
                autoCompleteType={undefined}
              />
            </FormControl>
          </Flex>
        </Box>

        <Box flex="1" style={styles.sectionWrapper}>
          <Flex direction="row-reverse">
            <Button
              width={'30%'}
              style={KitStyles.primaryBtn}
              onPress={onSendRequest}>
              <Text style={KitStyles.textInsideBtn}>send</Text>
            </Button>
            <Button
              mr={5}
              width={'30%'}
              style={KitStyles.secondaryBtn}
              onPress={onCancel}>
              <Text style={KitStyles.textInsideBtn}>cancel</Text>
            </Button>
          </Flex>
        </Box>
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

  wrapper: {
    marginLeft: 15,
  },

  sectionWrapper: {
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
});

export default RequestScreen;
