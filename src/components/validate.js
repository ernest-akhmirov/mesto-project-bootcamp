'use strict';



function showInputError (formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__error_visible');
};

function hideInputError (formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__error_visible');
  errorElement.textContent = '';
};

function checkInputValidity (formElement, inputElement) {
  if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
      hideInputError(formElement, inputElement);
  }
};

function hasInvalidInput (inputList) {
  return inputList.some((inputElement) =>{
      return !inputElement.validity.valid
  })
};

function toggleButtonState (inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup__button-save_inactive');
      buttonElement.disabled = true;
  } else {
      buttonElement.classList.remove('popup__button-save_inactive');
      buttonElement.disabled = false;
  }
};

function setEventListeners (formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__button-save');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
          checkInputValidity(formElement, inputElement);
          toggleButtonState(inputList, buttonElement)
      });
  });
};

 export function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
          evt.preventDefault();
      })
      setEventListeners(formElement);
  })
}

