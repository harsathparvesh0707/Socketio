import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    inRoom : null,
    rooms:[]
}

export const videoRoomSlice = createSlice({
    name:"videoRooms",
    initialState,
    reducers:{
        setInRoom:(state,action)=>{
            state.inRoom = action.payload
        },
        setRooms:(state,action)=>{
            state.rooms=action.payload
        }
    }
});

export const {setInRoom,setRooms} = videoRoomSlice.reducers;
 
export default videoRoomSlice.reducers;