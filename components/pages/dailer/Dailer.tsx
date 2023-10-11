import { RTButton, RTInput } from "@/components/shared";
import { RootStateModel } from "@/models";
import { setDailerStatus } from "@/store/config/config.action";
import { getDeviceToken } from "@/store/device/device.action";
import { PlusIcon, XMarkIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { Device } from 'twilio-client';

const Dailer = () =>{
    const {rightSidebar, dailerStatus} = useSelector((state:RootStateModel) => state.config)
    const {callToken} = useSelector((state:RootStateModel) => state.device)
    const dispatch:Dispatch<any> = useDispatch()

    const [number, setNumber] = useState('')
    const [connection , setConnection] = useState<any | null>(null)
    const [device, setDevice] = useState<Device>()

    const changeDailerState = () =>{
        dispatch(setDailerStatus(false));
    }

    const setNumbers= (e:React.ChangeEvent<HTMLInputElement>) => {
        setNumber(e.target.value);
    }

    const numberArray = [
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9'],
        ['*','0','#']
    ]

    const dailNumber = (item:string) => {
        console.log('test', item);
        setNumber(number+item);
    }
    useEffect(() => {
        console.log(number);
    }, [number])

    useEffect(()=>{
        dispatch(getDeviceToken());
    }, [dispatch])

    useEffect(() => {
        if(callToken){
            // console.log('token geted', callToken);
            setDevice(new Device());
            //deviceSetup(callToken);
        }
    }, [callToken])

    useEffect(() => {
        if(callToken){
            deviceSetup(callToken);
        }
    }, [device])

    const makeCall = () => {
        const deviceConnect = device?.connect({ number: '+918490029343', twilio_number: '+15103992816' })
        //this.connection = Device.connect({ number: n, twilio_number: profileLocal.number })
        setConnection(deviceConnect);
    }
    
    const startTimer = () => {
        var value = 0
        var callPannel = this
        // this.userDuration = setInterval(function () {
        //   // eslint-disable-next-line no-unused-vars
        //   var h = parseInt(value / 3600)
        //   var m = parseInt(value / 60)
        //   var s = value % 60
        //   h = h < 10 ? '0' + h : h
        //   callPannel.mm = m < 10 ? '0' + m : m
        //   callPannel.ss = s < 10 ? '0' + s : s
        //   value++
        // }, 1000)
    };

    const deviceSetup = (callToken:string) => {
        console.log('device', device);
        if(device){
        // const device = new Device()
            device.setup(callToken)
            device.incoming((connection) => {
                // callPannel.$refs['modalTall'].show()
                // // document.getElementById('incomingCallModel').click()
                // callPannel.connection = connection
                // callPannel.number = connection.options.callParameters.From
                // callPannel.incoming = true
            })
            device.connect((connection:any) => {
                setConnection(connection);
                // callPannel.connection = connection
                // callPannel.startTimer()
                // callPannel.getContact()
            })
            device.ready(() => {
                console.log('Connected')
                // this.call_text = 'Connected'
            })
            device.disconnect((connection) => {
            console.log('Awaiting incoming call...')
            // this.call_text = 'Awaiting incoming call...'
            // callPannel.dissconnected()
            })
            device.cancel((device) => {
            //callPannel.dissconnected()
            // callPannel.$refs['my-modal'].hide()
            })
            device.error((error) => {
            // console.log('error')
            // console.log(error)
            })
        }
    }

    const hangUpCall = () => {
        if(device)
            device.disconnectAll()
    }
    

    return(
        <>
            <div  className={`fixed inset-0 bg-black bg-opacity-50 z-20 ${dailerStatus  ? 'visible' : 'invisible'}`} aria-hidden="true" ></div>
            <section className={`fixed inset-y-0 right-0 w-80 bg-white border-l border-indigo-100 z-30 ${dailerStatus  ? 'visible' : 'invisible'}`} >
                <div className="px-4 py-2">
                    <div className="flex flex-col">
                        <div className="flex ">
                            <button className={`p-2 mr-4 text-white bg-red-600 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-white focus:ring-offset-gray-100 focus:ring-offset-4`} onClick={() => changeDailerState()} >
                                <span className="sr-only">Settings</span>
                                <XMarkIcon className="w-4 h-4" />
                            </button>
                        </div>
                        

                        <div className="flex justify-between">
                            <RTInput value={number} inputName={"number"} placeholder="Enter number" type="number" onChange={(e) => setNumbers(e)} />
                        </div>
                        <div>
                            { numberArray.map(item => 
                                <>
                                    <div className="flex justify-between mt-4 -mr-4">
                                        {item.map(number => 
                                            <>
                                                <button className="py-4 px-9 mr-4 text-white bg-indigo-600 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-white focus:ring-offset-gray-100 focus:ring-offset-4" onClick={() => dailNumber(number)}>{number}</button>
                                            </>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                        <div>
                            {connection ? <>
                                <button className={`p-2 mr-4 text-white bg-red-600 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-white focus:ring-offset-gray-100 focus:ring-offset-4`} onClick={() => hangUpCall()} >
                                    <span className="sr-only">Settings</span>
                                    <XMarkIcon className="w-4 h-4" />
                                </button>
                            </> : <>
                                { device ? <>
                                    <button className={`p-2 mr-4 text-white bg-green-600 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-white focus:ring-offset-gray-100 focus:ring-offset-4`} onClick={() => makeCall()} >
                                        <span className="sr-only">Settings</span>
                                        <XMarkIcon className="w-4 h-4" />
                                    </button>
                                </> : <>
                                    
                                </> }
                                
                            </>}
                            
                        </div>
                        
                    </div>

                    
                    
                </div>
            </section>
        </>
    )
}

export default Dailer;