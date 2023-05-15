'use strict';
import './pages/index.css';
import { handleProfileFormSubmit, openPopup, closePopup }  from './components/modal.js';
import { ProfileEditBtn, popupProfileForm, nameInput, jobInput, profileName, profileDescription, closeButtons, popupPlace, } from "./components/utils.js";
import {  renderInitialCards, addPlace} from "./components/card.js";
import { enableValidation, settings } from './components/validate.js';


// Cлушатель откр проф по кнопке
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
//
renderInitialCards();
//
popupPlace.addEventListener('submit', addPlace);
//
enableValidation(settings);





