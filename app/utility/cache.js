import AsyncStorage from "@react-native-community/async-storage";
import moment from "moment";

const prefix = "cache";
const expiryInMinutes = 5;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    console.log("Pasha cache,js -----------------", key);
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log("cache.js - set storage", error);
  }
};

const isExpired = (item) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  return (isExpired = now.diff(storedTime, "minutes") > expiryInMinutes);
};

const get = async (key) => {
  try {
    const value = AsyncStorage.getItem(prefix + key);
    console.log("pasassss", value);
    const item = JSON.parse(value);
    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log("cache.js - get storage", error);
  }
};

export default {
  store,
  get,
};
