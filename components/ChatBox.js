
import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { HStack, Icon, IconButton, Input } from 'native-base'
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { addUserMessage, updateUserName } from '../redux/chatHistorySlice';

const ChatBox = () => {

  coust = dispatch = useDispatch()
  const [chatMessage, setChatMessage] = useState("")

  return (
    <>
      {/* <Text>ChatBox</Text> */}
      <HStack padding={2} space={2}>
        <Input 
            onChangeText={(text)=>{setChatMessage(text)}}
        flex={7} placeholder="Please input..."
        value={chatMessage}
        //value="Hello"
        />
        
        <IconButton
        variant={'solid'}
            flex={1}
            icon={<Icon as={FontAwesome} name="home" size="lg"/>}
            onPress={()=>{
                // dispatch(updateUserName('Porntip Jeds'))
                //dispatch(updateUserName(chatMessage))
                dispatch(addUserMessage(chatMessage))
                setChatMessage("")
            }}

        />

      </HStack>
    </>
  )
}

export default ChatBox

const styles = StyleSheet.create({})