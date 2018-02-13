import { appConfig } from './app-config';

export let apiConfig = {
  urls: {
   getUsers : getUrl("api/getUsers"),
   addUsers : getUrl("api/addUser")
  }
};

function getUrl(url) {
  return appConfig.apiBaseUrl + appConfig.apiHostName + url;
}
