const UI = {

  // for form log in
  form: document.forms['loginForm'],
  inputEmail: document.getElementById('email'),
  inputPassword: document.getElementById('password'),

  // for tabes & event
  cardLogIn:  document.querySelector("#form-log-in"),
  cardRegis:  document.querySelector("#form-registr"),
  btnCardLogIn: document.querySelector("#form-log-in-button"),
  btnCardRegis: document.querySelector("#form-registr-btn"),

  // for form register 
  formRg:  document.forms['registr-form'],
  frName:  document.querySelector("#fr-name"),
  lsName:  document.querySelector("#ls-name"),
  emailReg:  document.querySelector("#email-rg"),
  passwordReg:  document.querySelector("#password-rg"),
  confirReg:  document.querySelector("#confir-rg"),
  city:  document.querySelector("#city"),
  country:  document.querySelector("#country"),
  nickname: document.querySelector("#nickname"),

  genders: document.querySelector('input[name="gridRadios"]:checked'),
  
  phone:  document.querySelector("#phone"),
  day:  document.querySelector("#day"),
  month:  document.querySelector("#month"),
  year:  document.querySelector("#year"),
};

export default UI;
