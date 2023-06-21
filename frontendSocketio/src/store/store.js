import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "../MapPage/mapSlice";
import messengerReducer from "../Messenger/messengerSlice";
import videoRoomReducers from "../realtimeCommunication/videoRoomsSlice";
const store = configureStore({
  reducer: {
    map: mapReducer,
    messenger: messengerReducer,
    videoRooms: videoRoomReducers
  },
});

export default store;
