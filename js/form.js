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

disableUserAdForm();
activeUserAdForm();
disableMapFilters();
activeMapFilters();
