'use strict';

const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  //modal.style.display = 'block'; //Changes the style
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

console.log(btnShowModal);

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


const currentYear = 2023;

const adeoti = {
  firstName: 'Adeoti',
  lastName: 'Salami',
  job: 'Web Designer & Developer intern',
  height: 1.86,

  calcAge: function (birthYear) {
    if ((currentYear - birthYear) >= 18) {
      console.log(`${this.firstName} can get a driver's license`);
    } else {
      console.log(`${this.firstName} is too young, not qualified`);
    }
  },
};

adeoti.calcAge(2009);
