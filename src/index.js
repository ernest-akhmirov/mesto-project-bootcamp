'use strict';
import './pages/index.css';
import { handleProfileFormSubmit, openPopup, closePopup, handleAvatarFormSubmit }  from './components/modal.js';
import { ProfileEditBtn, popupProfileForm, nameInput, jobInput, profileName, profileDescription, popupPlace, avatar , avatarEditbtn, popupAvatar} from "./components/utils.js";
import { addCard,createCard} from "./components/card.js";
import { enableValidation, settings } from './components/validate.js';
import { getInitialCards, getUser, checkResponse } from './components/api';



// Cлушатель откр проф по кнопке
avatarEditbtn.addEventListener('click', () => {
  openPopup(popupAvatar)
});
//
// Cлушатель откр автара по кнопке
ProfileEditBtn.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupProfileForm)
});
//
//

const popups = document.querySelectorAll('.popup')

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
          closePopup(popup)
        }
    })
})

//

//слушатель сабмита профиля
popupProfileForm.addEventListener('submit', handleProfileFormSubmit);
//
popupAvatar.addEventListener('submit', handleAvatarFormSubmit);
//
// renderInitialCards(); больше не нужно
//
popupPlace.addEventListener('submit', addCard);
//
enableValidation(settings);

 export let userId;
function insertDataProfile(userData) {
  profileName.textContent = userData.name;
  profileDescription.textContent = userData.about;
  userId = userData._id;
  avatar.src = userData.avatar;
}

Promise.all([getInitialCards(), getUser()])
.then(([cards, userData]) => {
  insertDataProfile(userData);
  const cardList = Array.from(cards);
  cardList.forEach(createCard);
})
.catch(checkResponse);






