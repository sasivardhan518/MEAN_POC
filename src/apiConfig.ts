import { appConfig } from './app-config';

export let apiConfig = {
  urls: {
   getUsers : getUrl('api/getUsers'),
   addUsers : getUrl('api/addUser'),
   loginUser: getUrl('api/loginUser')
  }
};

function getUrl(url) {
  return appConfig.apiBaseUrl + appConfig.apiHostName + url;
}
