'use strict';

const ProfileEditBtn = document.querySelector('.profile__edit-button');
const popupProfileForm = document.querySelector('.popup_profile');
const profileCloseButton = document.querySelector('.popup__close_btn-profile');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_profession');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
// const popups = document.querySelectorAll(".popup");
// const closeButtons = document.querySelectorAll('.popup__button-close');



// //откр.попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

ProfileEditBtn.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupProfileForm)
});
//

//закр.попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
// находим все крестики 
const closeButtons = document.querySelectorAll('.popup__close');
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});
//

//изменить данные в профиле
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupProfileForm);
}
popupProfileForm.addEventListener('submit', handleProfileFormSubmit);


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
renderInitialCards();
//

//Попап добавления места
const addBtn = document.querySelector('.profile__add-button'); 
const popupPlace = document.querySelector('.popup_place'); 
const closeBtnPlace = document.querySelector('.popup__close_btn-place'); 

addBtn.addEventListener('click', () => {
  openPopup(popupPlace)
});

// добавления места
const placeInput = document.querySelector('.popup__input_type_place'); 
const urlInput = document.querySelector('.popup__input_type_url'); 

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
popupPlace.addEventListener('submit', addPlace);

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
const closeBtnImg = document.querySelector('.popup__close_btnImg');
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
//ВАЛИДАЦИЯ
//


