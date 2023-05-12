'use strict';
import { addBtn, popupPlace, placeInput, urlInput } from "./utils.js";
import { openPopup, closePopup} from './modal.js'
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
  elementPhoto.src = item.link;
  elementPhoto.alt = item.name;
  elementTitle.textContent = item.name;
  return cardElement;
}

function createCard (item) {
  const placesContainerItem = getCard(item)
  placesContainer.prepend(placesContainerItem);
  toggleLikeButton();
  deleteButton();
  zoomImage();
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
}
  addBtn.addEventListener('click', () => {
  openPopup(popupPlace)
});
//

//лайк карточки 
function toggleLikeButton() {
  const likeBtn = document.querySelector('.element__like-button');
  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('element__like-button_active');
  });
}
//

//удаление карточки
function deleteButton() {
  const deleteBtn = document.querySelector('.element__delete-button');
  deleteBtn.addEventListener('click', () => {
    deleteBtn.parentElement.remove();
    });
}
//

//увеличение картинки карточки
const popupZoomImg = document.querySelector('.popup_zoomImg');
const image = document.querySelector('.popup__image');
const imageText = document.querySelector('.popup__imageText');

function zoomImage() {
  const placeImage = document.querySelector('.element__photo');
  placeImage.addEventListener('click', () => {
    image.src = placeImage.src;
    image.alt = placeImage.alt;
    imageText.textContent = placeImage.alt;
    popupZoomImg.classList.add('popup_opened');
  });
}
//

export {getCard, createCard, renderInitialCards, addPlace, toggleLikeButton, deleteButton, zoomImage};