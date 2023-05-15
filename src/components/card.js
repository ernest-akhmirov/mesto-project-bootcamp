'use strict';
import { addBtn, popupPlace, placeInput, urlInput } from "./utils.js";
import { openPopup, closePopup} from './modal.js';
import { disableSubmitBtn, settings } from './validate.js';

//загрузка карточек
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

const placesContainer = document.querySelector('.elements');
const placeTemplate = document.querySelector('#templateCard').content;



function getCard(item){
  const cardElement = placeTemplate.querySelector('.element').cloneNode(true);
  const elementTitle = cardElement.querySelector('.element__title');
  const elementPhoto = cardElement.querySelector('.element__photo');
  const deleteBtn = cardElement.querySelector('.element__delete-button');
  const likeBtn = cardElement.querySelector('.element__like-button');
  const placeImage = cardElement.querySelector('.element__photo');
  const popupZoomImg = document.querySelector('.popup_zoomImg');
  const image = document.querySelector('.popup__image');
  const imageText = document.querySelector('.popup__imageText');
  elementPhoto.src = item.link;
  elementPhoto.alt = item.name;
  elementTitle.textContent = item.name;
  // //удаление карточки
function deleteButton() {
  deleteBtn.parentElement.remove();
}
deleteBtn.addEventListener('click', deleteButton);
// //лайк карточки 
function toggleLikeButton() {
  likeBtn.classList.toggle('element__like-button_active');
}
likeBtn.addEventListener('click', toggleLikeButton);
//увеличение картинки карточки
function zoomImage() {
    image.src = placeImage.src;
    image.alt = placeImage.alt;
    imageText.textContent = placeImage.alt;
    openPopup(popupZoomImg);
}
placeImage.addEventListener('click', zoomImage);
  return cardElement;
}

function createCard (item) {
  const placesContainerItem = getCard(item)
  placesContainer.prepend(placesContainerItem);

}

function renderInitialCards () {
  initialCards.forEach(createCard);
 }

 // добавления места
function addPlace (evt) {
  evt.preventDefault();
  const newPlace = {
    name: placeInput.value,
    link: urlInput.value,
  };
  createCard(newPlace);
  closePopup(popupPlace);
  evt.target.reset();
  disableSubmitBtn(popupPlace, settings);
}
  addBtn.addEventListener('click', () => {
  openPopup(popupPlace);
});

export {getCard, createCard, renderInitialCards, addPlace,};