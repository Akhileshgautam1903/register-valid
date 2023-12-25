// my code
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const checkbox = document.getElementById('check');
const submit = document.getElementById('button');
const tip = document.querySelector(".tip");
const tip1 = document.querySelector(".tip1")

//colors
const danger = "#f1aeb5";
const success = "#a3cfbb";
const original = "#fdfeff";

function updateSubmit() {
  if(fullname.value !== '' && email.value !== '' && password1.value !== '' && password2.value !== '' && checkbox.checked && isSame() && isStrong() && isEmail()) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
}

fullname.addEventListener('input', updateSubmit);
email.addEventListener('input', updateSubmit);
password1.addEventListener('input', updateSubmit);
password2.addEventListener('input', updateSubmit);
checkbox.addEventListener('change', updateSubmit);

function isSame() {
  if(password1.value !== password2.value) {
    password2.style.borderColor = danger;
    return false
  }
  else{
    password2.style.borderColor = success;
    return true;
  }
}

function isEmail() {
  if (email.value.includes('@')) {
    email.style.borderColor = success;
    tip1.innerHTML = ''
    return true
  } else {
    email.style.borderColor = danger;
    tip1.innerHTML = 'You need to have @ in email'
    return false
  }
}

function isStrong() {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/;
  if(passwordRegex.test(password1.value)) {
    password1.style.borderColor = success;
    tip.innerHTML = ''
    return true
  }
  else {
    password1.style.borderColor = danger;
    tip.innerHTML = 'Password should be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one special character, and one number.'
    return false
  }
}



document.querySelector(".btn").addEventListener('click', e => {
  const details = {
    fullname : fullname.value,
    email : email.value,
    password : password1.value
  }
  console.log(details);
  e.preventDefault();
  fullname.value = ''
  email.value = ''
  password1.value = ''
  password2.value = ''
  checkbox.checked = false;
  password1.style.borderColor = original
  password2.style.borderColor = original
  submit.disabled = true
})