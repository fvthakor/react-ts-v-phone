import { RootStateModel } from "@/models";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const { io } = require("socket.io-client");

let socket:any;


const SocketConnection = () => {
    useEffect(() => {socketInitializer()}, [])
    const { authUser } = useSelector((state:RootStateModel) => state.auth)
    const socketInitializer = async () => {
     //await fetch('http://localhost:3001/socket')
      socket = io('http://localhost:3001')

      socket.on('connect', () => { 
        console.log('connected');
      })
      socket.on("new_message", (data:any) => {
        socket.emit('user_connected', authUser?._id);
      });
      
     
    }

    // const joinUserGroup =() => {
      
    // }

      return (<></>)

}

export default SocketConnection;