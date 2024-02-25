const mapFilters = document.querySelector('.map__filters');
const mapFiltersItems = mapFilters.querySelectorAll('input, select, button, fieldset');
const adForm = document.querySelector('.ad-form');
const adFormFieldset = adForm.querySelectorAll('fieldset');


const disableMapFilters = () => {
  if(mapFilters){
    mapFilters.classList.add('map__filters--disabled');

    for (let i = 0; i < mapFiltersItems.length; i++) {
      mapFiltersItems[i].disabled = true;
    }
  }
};

const activeMapFilters = () => {
  if(mapFilters){
    mapFilters.classList.remove('map__filters--disabled');

    for (let i = 0; i < mapFiltersItems.length; i++) {
      mapFiltersItems[i].disabled = false;
    }
  }
};

const disableUserAdForm = () => {
  if(adForm){
    adForm.classList.add('ad-form--disabled');

    for (let i = 0; i < adFormFieldset.length; i++) {
      adFormFieldset[i].disabled = true;
    }
  }
};

const activeUserAdForm = () => {
  if(adForm){
    adForm.classList.remove('ad-form--disabled');

    for (let i = 0; i < adFormFieldset.length; i++) {
      adFormFieldset[i].disabled = false;
    }
  }
};

const pristine = new Pristine(adForm, {
  classTo: 'form__item',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'form__item',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

function validateTitle (value) {
  return value.length >= 30 && value.length <= 100;
}

function validateEmpty(value) {
  return value.trim() !== '';
}

pristine.addValidator(
  adForm.querySelector('#title'),
  validateTitle,
  'От 30 до 100 символов'
);

pristine.addValidator(
  adForm.querySelector('#address'),
  validateEmpty
);

function validateMaxValue(value) {
  const intValue = parseInt(value, 10);
  return !isNaN(intValue) && intValue <= 100000;
}

const amountPrice = adForm.querySelector('#price');

const minAmountPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

function validateMinAmount (value) {
  const option = adForm.querySelector('#type option:checked');
  return value.length && parseInt(value, 10) >= minAmountPrice[option.value];
}

function getMinAmountErrorMessage () {
  const option = adForm.querySelector('#type option:checked');
  return `Минимальная цена за ночь ${minAmountPrice[option.value]}`;
}

function onTypeChange () {
  amountPrice.placeholder = minAmountPrice[this.value];
  pristine.validate(amountPrice);
}

adForm.querySelectorAll('#type').forEach((item) => item.addEventListener('change', onTypeChange));


pristine.addValidator(amountPrice, validateMinAmount, getMinAmountErrorMessage);


const roomsField = adForm.querySelector('[name="rooms"]');
const capacityField = adForm.querySelector('[name="capacity"]');

const roomsOption = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};

const checkTimeIn = adForm.querySelector('#timein');
const checkTimeOut = adForm.querySelector('#timeout');
function onTimeChange(event) {
  const targetSelect = event.target;
  const otherSelect = targetSelect === checkTimeIn ? checkTimeOut : checkTimeIn;

  otherSelect.value = targetSelect.value;
}

checkTimeIn.addEventListener('change', onTimeChange);
checkTimeOut.addEventListener('change', onTimeChange);

function validateRooms () {
  return roomsOption[roomsField.value].includes(capacityField.value);
}

pristine.addValidator(capacityField, validateRooms, 'Не подходит количество комнат');

pristine.addValidator(
  amountPrice,
  validateEmpty,
);

pristine.addValidator(
  amountPrice,
  validateMaxValue,
  'Максимальное значение — 100 000'
);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();

  if (isValid) {
    adForm.submit();
    // eslint-disable-next-line no-console
    console.log('Форма валидна.');
  } else {
    // eslint-disable-next-line no-console
    console.log('Форма не валидна');
  }
});

disableUserAdForm();
activeUserAdForm();
disableMapFilters();
activeMapFilters();
