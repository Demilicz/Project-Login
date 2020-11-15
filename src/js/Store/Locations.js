import api from '../services/local.servece';


class Location {
  constructor(api){
    this.api = api;
    this.countries = null;
    this.shortCoutries = {};
    this.shortCities = {};
  
  }

  async init (){
    const response = await Promise.all([this.api.countries()]);

    const [countries] = response;

    this.countries = countries;
    
    this.shortCoutries = Object.values(countries);

    return response;
    
  }
  
  async createShortCity (index) {

    const response = await this.api.cities(index);

    this.shortCities = Object.values(response);
  } 

  getCountryIndex (country){
   const arrCountries = Object.entries(this.countries);
   const index = arrCountries.find(([, index]) => index === country);
   return index[0];
 }
 
}

const local = new Location(api);

export default local;