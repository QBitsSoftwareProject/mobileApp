import axios from "axios";
import { BACKEND_URI } from "../../config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

//webSocket implementation
let ws;

const connectWebSockets = async (setObjectList, setNotification) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    const userId = await AsyncStorage.getItem("userId");

    ws = new WebSocket(`${BACKEND_URI.replace(/^http/, "ws")}/ws`);

    ws.onopen = () => {
      //   console.log("WebSocket connected");
      ws.send(JSON.stringify({ type: "authenticate", token, userId }));
    };

    ws.onmessage = (event) => {
      const object = JSON.parse(event.data);

      setObjectList(object);
    };

    ws.onclose = () => {
      //   console.log("WebSocket disconnected, reconnecting...");
      setTimeout(() => connectWebSockets(setObjectList), 3000);
    };
  } catch (error) {
    console.error("WebSocket connection failed:", error);
  }
};

export const useWebSockets = (setObjectList) => {
  useEffect(() => {
    connectWebSockets(setObjectList);
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);
};
