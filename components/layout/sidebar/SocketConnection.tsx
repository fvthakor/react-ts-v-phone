import { Message, RootStateModel } from "@/models";
import { reciveMessage } from "@/store/message/message.action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

const { io } = require("socket.io-client");

let socket;


const SocketConnection = () => {
    const dispatch:Dispatch<any> = useDispatch();

    const [connectSocket, setConnectSocket] = useState(false)

    useEffect(() => {socketInitializer()}, [])
    const { authUser } = useSelector((state:RootStateModel) => state.auth)
    const socketInitializer = async () => {
      if(!connectSocket){
        setConnectSocket(true);
        socket = io('http://localhost:3001')

        socket.on('connect', () => { 
          console.log('connected');
        })
        socket.on("new_message", (data:any) => {
          //socket.emit('user_connected', authUser?._id);
          console.log('user connected');
        });

        socket.on("receiveMessage", (message: Message) => {
          dispatch(reciveMessage(message));
        })
        socket.emit('user_connected', authUser?._id);
      }
     //await fetch('http://localhost:3001/socket')
      
      
     
    }

    // const joinUserGroup =() => {
      
    // }

      return (<></>)

}

export default SocketConnection;