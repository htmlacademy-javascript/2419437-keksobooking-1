import { amountPrice } from './form.js';
const sliderElement = document.querySelector('.ad-form__slider');
const selectType = document.querySelector('#type');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 3000,
  step: 100,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

amountPrice.addEventListener('change', function () {
  const inputValue = parseFloat(this.value.trim());
  if (!isNaN(inputValue)) {
    sliderElement.noUiSlider.set(inputValue);
  }
});

sliderElement.noUiSlider.on('update', () => {
  amountPrice.value = sliderElement.noUiSlider.get();
});


selectType.addEventListener('change', () => {
  const placeholderValue = parseFloat(amountPrice.placeholder);
  if (!isNaN(placeholderValue)) {
    sliderElement.noUiSlider.set(placeholderValue);
  }
});
