import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box, HStack, Text, VStack, KeyboardAvoidingView } from 'native-base';
import { StyleSheet, View } from 'react-native';
import ChatHistory from './components/ChatHistory';
import ChatBox from './components/ChatBox';
import store from './redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
   <Provider store={store}> 
   <NativeBaseProvider>
    <Box safeAreaTop bgColor="red.600"/>
    <HStack  bg="red.300" p={5} w={styles.header.w}>
      <Text color={'white'} fontSize={30} fontweight={20}>Home</Text>
    </HStack>

    <KeyboardAvoidingView behavior='padding' flex={1}>
      <VStack flex={1}  width="100%">
        <ChatHistory/>
        <ChatBox/>
      </VStack>
    </KeyboardAvoidingView>

    <Box safeAreaBottom bgColor="red.600"/>

   </NativeBaseProvider>
   </Provider>
  );
}

const styles = StyleSheet.create({



  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

header: {
  p:6,
  w:'80%',
}

});
