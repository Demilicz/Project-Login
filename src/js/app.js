import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from './config/ui.config';
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './views/form';
import { login, Register } from './services/auth.service';
import { notify } from './views/notifications';
import location from './Store/Locations';



const { form, inputEmail, inputPassword , cardLogIn, cardRegis,  btnCardLogIn, btnCardRegis, formRg,
  frName, lsName, nickname,  emailReg, passwordReg, confirReg, country, city, genders, phone, day, month, year } = UI;

const inputs = [inputEmail, inputPassword];
const inputsReg = [emailReg, passwordReg, confirReg];




initApp();



// Events

document.querySelector('#city').addEventListener('input', e => {
  if(location.shortCities.length > 0) {
   let citiesArr = [];
 
   if(e.target.value){
     citiesArr = location.shortCities.filter( city => city.toLowerCase().includes(e.target.value));
     citiesArr = citiesArr.map( city => `<li class=list-group-item>${city}</li>`)
   }
   showCities(citiesArr);
 
  }});

document.querySelector('#country').addEventListener('input', e => {
  let countriesArr = [];

  if(e.target.value){
    
    countriesArr = location.shortCoutries.filter( country => country.toLowerCase().includes(e.target.value));
    countriesArr = countriesArr.map( country => `<li class=list-group-item>${country}</li>`)
  }
  showCountries(countriesArr);

});

document.querySelector('#ul_cities').addEventListener('click' , e => {
  city.value = e.target.textContent;
  const list = e.target.parentElement;
 
  list.innerHTML = '';
} )


document.querySelector('#ul_countries').addEventListener('click', e => {
  country.value = e.target.textContent;
  const list = e.target.parentElement;
  list.innerHTML = '';
  const  index = location.getCountryIndex(country.value);
  city.removeAttribute("disabled");

  location.createShortCity(index);

});





btnCardRegis.addEventListener('click', e => {
  cardLogIn.style.display ="none";
  cardRegis.style.display = "block";
});


btnCardLogIn.addEventListener('click', e => {
  cardRegis.style.display = "none";
  cardLogIn.style.display = "block";
});



form.addEventListener('submit', e => {
  e.preventDefault();
  onSubmit();
});

formRg.addEventListener('submit', e => {
  e.preventDefault();
  onSubmitForRegis()
})

inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)));
inputsReg.forEach(el => el.addEventListener('focus', () => removeInputError(el)));



// Handlers
  

function showCountries (items){
  const html = !items.length ? '' : items.join('');
  document.querySelector('#ul_countries').innerHTML = html;
};

function showCities (items){
  const html = !items.length ? '' : items.join('');
  document.querySelector('#ul_cities').innerHTML = html;
};

async function initApp() {
  await location.init();
}

async function onSubmitForRegis(){
  if(passwordReg.value !== confirReg.value){
  notify({ msg: 'Field password and confirm is not equal', className: 'alert-danger' })
  return;
  }
  const isValidForm = inputsReg.every(el => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showInputError(el);
    }
    return isValidInput;
  });

  if (!isValidForm) return;
  try {
    await Register(emailReg.value, passwordReg.value, nickname.value, frName.value, lsName.value, phone.value, genders.value, city.value, country.value, day.value, month.value, year.value);
    formRg.reset();
    notify({ msg: 'Login success', className: 'alert-success' });
  } catch (err) {
    notify({ msg: 'Login faild', className: 'alert-danger' });
  }


}
async function onSubmit() {
  const isValidForm = inputs.every(el => {
    const isValidInput = validate(el);
    
    if (!isValidInput) {
      showInputError(el);
    }
    
    return isValidInput;
  });

  if (!isValidForm) return;

  try {
    await login(inputEmail.value, inputPassword.value);
    form.reset();
    notify({ msg: 'Login success', className: 'alert-success' });
  } catch (err) {
    notify({ msg: 'Login faild', className: 'alert-danger' });
  }
}
