'use strict';
import { addBtn, popupPlace, placeInput, urlInput, saveBtnPlace } from "./utils.js";
import { openPopup, closePopup, nowSaving} from './modal.js';
import { disableSubmitBtn, settings } from './validate.js';
import { addNewCard, removeCard, putLike, deleteLike, checkResponse } from './api.js';
import { userId } from '../index.js';

// //загрузка карточек
//  const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
// ]; 

const placesContainer = document.querySelector('.elements');
const placeTemplate = document.querySelector('#templateCard').content;



function getCard(item){
  const cardElement = placeTemplate.querySelector('.element').cloneNode(true);//
  const elementTitle = cardElement.querySelector('.element__title');
  const deleteBtn = cardElement.querySelector('.element__delete-button');
  const likeBtn = cardElement.querySelector('.element__like-button');
  const placeImage = cardElement.querySelector('.element__photo');//
  const popupZoomImg = document.querySelector('.popup_zoomImg');
  const image = document.querySelector('.popup__image');
  const imageText = document.querySelector('.popup__imageText');
  const likeCounter = cardElement.querySelector('.element__like-counter');
  placeImage.src = item.link;
  placeImage.alt = item.name;
  elementTitle.textContent = item.name;
  cardElement.id = item._id;
  likeCounter.textContent = item.likes.length;

  if (item.owner._id !== userId) {
    deleteBtn.remove();
  }


  //удаление карточки
  function killcard (evt) {
    const deleteBtn = evt.target;
    const card = deleteBtn.parentElement;
    removeCard(card.id)
      .then(() => {
          card.remove();
      })
    };

  deleteBtn.addEventListener('click', killcard);



// //лайк карточки 
  function toggleLikeButton() {
    if (!likeBtn.classList.contains('element__like-button_active')){
      putLike(item._id)
        .then((res) => {
          likeCounter.textContent = res.likes.length;
          likeBtn.classList.add('element__like-button_active');
        })
        .catch((err) => {
          checkResponse(err);
        });
    }
    else {
      deleteLike(item._id)
        .then ((res) => {
          likeBtn.classList.remove('element__like-button_active');
          likeCounter.textContent = res.likes.length;
        })
        .catch((err) => {
          checkResponse(err);
        });
    }
  };
  likeBtn.addEventListener('click', toggleLikeButton);
  //
// есть ли уже мои лайки
if (item.likes.some(likes => likes._id == userId)) {
  likeBtn.classList.add('element__like-button_active');
};
//


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
  // console.log(item);
  const placesContainerItem = getCard(item)
  placesContainer.prepend(placesContainerItem);
}

function renderInitialCards () {
  initialCards.forEach(createCard);
 }

 // добавления места
function addCard (evt) {
  evt.preventDefault();
  nowSaving(saveBtnPlace, "Сохранение...");
  addNewCard(placeInput.value, urlInput.value)
  .then((card) => {
     console.log(card)
     createCard(card);
     closePopup(popupPlace);
     evt.target.reset();
     disableSubmitBtn(popupPlace, settings);
  })
  .finally(() => {
    nowSaving(saveBtnPlace, "Сохранить");
    });
  evt.target.reset();
  disableSubmitBtn(popupPlace, settings);
}
  addBtn.addEventListener('click', () => {
  openPopup(popupPlace);
});

// 

export {getCard, createCard, renderInitialCards, addCard };

