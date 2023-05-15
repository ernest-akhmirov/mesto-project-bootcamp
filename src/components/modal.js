'use strict';
import { popupProfileForm, nameInput, jobInput, profileName, profileDescription } from './utils.js';
//изменить данные в профиле
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupProfileForm);
}

// //откр.попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}
//
//закр.попап
 function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}
//
//закр по экскейпу
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
     closePopup(openedPopup);
  }
}

export {handleProfileFormSubmit, openPopup, closePopup, closeByEscape};
