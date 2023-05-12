'use strict';
import './pages/index.css';
import { handleProfileFormSubmit, openPopup, closePopup }  from './components/modal.js';
import { ProfileEditBtn, popupProfileForm, nameInput, jobInput, profileName, profileDescription, closeButtons, popupPlace, } from "./components/utils.js";
import {  renderInitialCards, addPlace} from "./components/card.js";
import { enableValidation } from './components/validate.js';

// Cлушатель откр проф по кнопке
ProfileEditBtn.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupProfileForm)
});
//
// закрытие по эскейпу
document.addEventListener('keydown', function(event) {
  const openedPopup = document.querySelector('.popup_opened');
  if (openedPopup && event.key === 'Escape') {
    closePopup(openedPopup);
  }
});
//
//закрытие по оверлею
document.addEventListener('click', function(event) {
  const openedPopup = document.querySelector('.popup_opened');
  if (openedPopup && event.target === openedPopup) {
    closePopup(openedPopup);
  }
});
// находим все крестики 
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});
//
//слушатель сабмита профиля
popupProfileForm.addEventListener('submit', handleProfileFormSubmit);
//
//
renderInitialCards();
//
popupPlace.addEventListener('submit', addPlace);
//
enableValidation(
  {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}
);





