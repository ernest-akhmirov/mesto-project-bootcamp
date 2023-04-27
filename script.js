'use strict';

const editBtn = document.querySelector('.profile__edit-button'); //выбор кнопки ред.профиля
const popup = document.querySelector('.popup'); // выбор попап окна ред.профиля
const closeBtn = document.querySelector('.popup__close'); //выбор кнопки закрыть ред.профиля
const nameInput = document.querySelector('.popup__input_type_name'); //выбор инпута с именем
const jobInput = document.querySelector('.popup__input_type_profession'); //выбор инпута с профессией
const profileName = document.querySelector('.profile__name'); // выбор имени профиля
const profileDescription = document.querySelector('.profile__description');// выбор профессии профиля

nameInput.value = profileName.textContent;
jobInput.value = profileDescription.textContent;
// откр. попап.ред профиля 
editBtn.addEventListener('click', function () {
  popup.classList.add('popup_opened')
});
//
// закр. попап.ред профиля
function closepopup() {
  popup.classList.remove('popup_opened')
};
closeBtn.addEventListener('click', closepopup);
//
// изменения в профиле
function handleFormSubmit(evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
};
popup.addEventListener('submit', handleFormSubmit);
popup.addEventListener('submit', closepopup);
//
//карточки для загрузки
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 
//