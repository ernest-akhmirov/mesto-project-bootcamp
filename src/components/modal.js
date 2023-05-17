'use strict';
import { popupProfileForm, nameInput, jobInput, profileName, profileDescription, avatar, popupAvatar, savebtnAvatar, savebtnProfile } from './constants.js';
import { updateUserData, patchAvatar } from './api.js';
import { disableSubmitBtn, settings } from './validate.js';
import { setNowSaving } from './utils.js';

//изменить данные в профиле
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  setNowSaving(savebtnProfile, "Сохранение...");
  updateUserData(nameInput.value, jobInput.value)
  .then(() => {
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(popupProfileForm);
    disableSubmitBtn(savebtnProfile, settings);
  })
  .catch(console.error)
  .finally(() => {
    setNowSaving(savebtnProfile, "Сохранить");
  });
}
const avatarForm = document.newAvatar;
const avatarInput = avatarForm.elements.avatarLink;


function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  setNowSaving(savebtnAvatar, "Сохранение...");
  patchAvatar(avatarInput.value)
  .then(() => {
    avatar.src = avatarInput.value;
    closePopup(popupAvatar);
    evt.target.reset();
    disableSubmitBtn(savebtnAvatar, settings);
  })
  .catch(console.error)
  .finally(() => {
    setNowSaving(savebtnAvatar, "Сохранить");
  });
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

export {handleProfileFormSubmit, handleAvatarFormSubmit, openPopup, closePopup, closeByEscape};
