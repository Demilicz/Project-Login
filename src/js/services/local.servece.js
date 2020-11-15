import axios from 'axios';
import API_ENV from '../config/api.config';

class api {
  constructor(api_env){
    this.url = api_env.apiUrl;
  }

  async countries() {
    try{
      const response = await axios.get(`${this.url}/location/get-countries`);
      
      return response.data;
    }
    catch(err){
      console.log(err);
      return Promise.reject(err) ;
    }
    
  }
  async cities(index) {
    try{
      const response = await axios.get(`${this.url}/location/get-cities/${index}`);
      
      return response.data;
    }
    catch(err){
      console.log(err);
      return Promise.reject(err) ;
    }
    
  }
}

const Api = new api(API_ENV);

export default Api;