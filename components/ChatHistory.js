import { View, Text } from 'react-native'
import React from 'react'
import { Box, FlatList, HStack } from 'native-base'
import { useSelector } from 'react-redux'

const ChatHistory = () => {

    const username = useSelector((state)=>{return state.chatroom.username})
    const chatHistory = useSelector(state => state.chatroom.chatHistory)

  return (
    <>
      <Box>{username}</Box>
      <FlatList
        data={chatHistory}
        renderItem={({item})=>{
            return(
                <HStack p={2} space={2}>
                    <Text>{item.sender} : </Text>
                    <Text>{item.text}</Text>
                </HStack>
            )
        }}
      />
      {/* <Text>ChatHistory</Text> */}
    </>
  )
}

// export const ChatBolloon = () => {
//     return (
//       <View>
//         <Text>ChatBolloon</Text>
//       </View>
//     )
//   }

// export const Login = () => {}

export default ChatHistory