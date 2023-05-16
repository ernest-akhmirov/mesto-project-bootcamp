'use strict';
import { popupProfileForm, nameInput, jobInput, profileName, profileDescription, avatar, popupAvatar, savebtnAvatar, savebtnProfile } from './utils.js';
import { updateUserData, patchAvatar } from './api.js';

//изменить данные в профиле
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nowSaving(savebtnProfile, "Сохранение...");
  updateUserData(nameInput.value, jobInput.value)
  .then(() => {
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(popupProfileForm);
  })
  .finally(() => {
  nowSaving(savebtnProfile, "Сохранить");
  });
}
const avatarForm = document.newAvatar;
const avatarInput = avatarForm.elements.avatarLink;


function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  nowSaving(savebtnAvatar, "Сохранение...");
  patchAvatar(avatarInput.value)
  .then(() => {
    avatar.src = avatarInput.value;
    closePopup(popupAvatar);
    evt.target.reset();
  })
  .finally(() => {
    nowSaving(savebtnAvatar, "Сохранить");
  });
}
//
export function nowSaving(submitBtn, text) {
  submitBtn.textContent = text;
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
