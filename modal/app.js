const signup = document.querySelector('.signup');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const confirm = document.querySelector('.confirm');
const small = document.querySelectorAll('small');
const closeModal = document.querySelector('.close-button');
const modal = document.querySelector('#modal');
const introSignup = document.querySelector('.introSignup');



signup.addEventListener('click', () => {
  hideSmall();

 if(email.required) {
   showSmall(email);
 }
 if(password.required) {
   showSmall(password);
 }
})

closeModal.addEventListener('click', (e) => {
  modal.style.display = 'none'
})

introSignup.addEventListener('click', () => {
  introSignup.previousElementSibling.style.display = 'none';
  modal.style.display = 'block'
  introSignup.style.display = 'none';
})

function hideSmall() {
  for (let s of small) {
    s.style.display = 'none'
  }
}

function showSmall(ele) {
  ele.nextElementSibling.style.display = 'block';
}