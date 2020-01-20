import {AsyncStorage} from 'react-native';
const ID_TOKEN_KEY = "id_token";
const APP_DATA = {};

export const getToken = () => {
  return APP_DATA[ID_TOKEN_KEY];
  //return window.localStorage.getItem(ID_TOKEN_KEY);
};

export const saveToken = token => {
  APP_DATA[ID_TOKEN_KEY] = token;
  // window.localStorage.setItem(ID_TOKEN_KEY, token);
};

export const destroyToken = () => {
  APP_DATA[ID_TOKEN_KEY] = undefined;
  // window.localStorage.removeItem(ID_TOKEN_KEY);
};

export default { getToken, saveToken, destroyToken };
