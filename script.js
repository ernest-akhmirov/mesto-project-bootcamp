'use strict';

const editBtn = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');
const closeBtn = document.querySelector('.popup__close_btn-profile');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_profession');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

nameInput.value = profileName.textContent;
jobInput.value = profileDescription.textContent;

//откр.попап
editBtn.addEventListener('click', () => {
  popupProfile.classList.add('popup_opened');
});
//

//закр.попап
function closePopupProfile() {
  popupProfile.classList.remove('popup_opened');
}
closeBtn.addEventListener('click', closePopupProfile);
//

//изменить данные в профиле
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
}
popupProfile.addEventListener('submit', handleFormSubmit);
popupProfile.addEventListener('submit', closePopupProfile);

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

function cardDrawer () {
  initialCards.forEach(createCard)
 }

function createCard ({ name, link }) {
  const placeElement = placeTemplate.querySelector('.element').cloneNode(true);
  placeElement.querySelector('.element__title').textContent = name;
  placeElement.querySelector('.element__photo').src = link;
  placeElement.querySelector('.element__photo').alt = name;
  placesContainer.prepend(placeElement);
}

cardDrawer();
//

//Попап добавления места
const addBtn = document.querySelector('.profile__add-button'); 
const popup_place = document.querySelector('.popup_place'); 
const closeBtnPlace = document.querySelector('.popup__close_btn-place'); 

addBtn.addEventListener('click', function () {
  popup_place.classList.add('popup_opened')
});

function closepopupPlace() {
  popup_place.classList.remove('popup_opened')
};
closeBtnPlace.addEventListener('click', closepopupPlace);
//

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
  toggleLikeButton();
  deleteButton();
  zoomImage();
}
popup_place.addEventListener('submit', addPlace);
popup_place.addEventListener('submit', closepopupPlace);
//

//лайк карточки 
function toggleLikeButton() {
  const likeBtn = document.querySelectorAll('#likeMe');
  likeBtn.forEach(element => {
    element.addEventListener('click', () => {
      element.classList.toggle('element__like-button_active');
    })
  });
}
toggleLikeButton();
//

//удаление карточки
function deleteButton() {
  const deleteBtn = document.querySelectorAll('#deleteMe');
  deleteBtn.forEach(element => {
    element.addEventListener('click', () => {
      element.parentElement.remove();
    })
  });
}
deleteButton();
//

//увеличение картинки карточки
const popup_zoomImg = document.querySelector('.popup_zoomImg');
const image = document.querySelector('.popup__image');
const closeBtnImg = document.querySelector('.popup__close_btnImg');
const imageText = document.querySelector('.popup__imageText');

function zoomImage() {
  const placeImage = document.querySelectorAll('.element__photo');

  placeImage.forEach(element => {
    element.addEventListener('click', () => {
      image.src = element.src;
      imageText.textContent = element.alt;
      popup_zoomImg.classList.add('popup_opened');
    })
  })
}

zoomImage();
//

// //закрыть увеличенную картинку
closeBtnImg.addEventListener('click', () => {
  popup_zoomImg.classList.remove('popup_opened');
})
//