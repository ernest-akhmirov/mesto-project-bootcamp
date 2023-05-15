'use strict';
//константы
const ProfileEditBtn = document.querySelector('.profile__edit-button');
const popupProfileForm = document.querySelector('.popup_profile');
const  profileCloseButton = document.querySelector('.popup__close_btn-profile');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_profession');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const closeButtons = document.querySelectorAll('.popup__close');
const addBtn = document.querySelector('.profile__add-button'); 
const popupPlace = document.querySelector('.popup_place'); 
const closeBtnPlace = document.querySelector('.popup__close_btn-place'); 
const placeInput = document.querySelector('.popup__input_type_place'); 
const urlInput = document.querySelector('.popup__input_type_url'); 






export {ProfileEditBtn, popupProfileForm, profileCloseButton, nameInput, jobInput, profileName, profileDescription, closeButtons, addBtn, popupPlace, closeBtnPlace, placeInput, urlInput};