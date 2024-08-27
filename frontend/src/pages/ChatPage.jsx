import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ChatPage = () => {

    const[chats,setChats] = useState([]);

    const fetchData = async() => {
        const {data} = await axios.get("http://localhost:5000/api/chat");
        setChats(data);
        console.log(data);
        
    }

    useEffect(()=> {
        fetchData();
    },[])

  return (
    <>
        {
            chats.map((chat)=>{
                return <div key={chat._id}>{chat.chatName}</div>
            })
        }
    </>
  )
}

export default ChatPage
