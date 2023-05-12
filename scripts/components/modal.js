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
}
//
//закр.попап
 function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
//

export {handleProfileFormSubmit, openPopup, closePopup};
