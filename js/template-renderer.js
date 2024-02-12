import { similarAdvertisement } from './data.js';

const typeOfHousing = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const cardTemplate = document.querySelector('#card').content;
const newItemTemplate = cardTemplate.querySelector('.popup');
let cardCounter = 0;

for (let i = 0; i < similarAdvertisement.length; i++) {
  const card = newItemTemplate.cloneNode(true);
  const cardTitle = card.querySelector('.popup__title');
  const cardAddress = card.querySelector('.popup__text--address');
  const cardPrice = card.querySelector('.popup__text--price');

  //Type
  const cardType = card.querySelector('.popup__type');
  const itemType = similarAdvertisement[i].offer.type;

  const cardCapacity = card.querySelector('.popup__text--capacity');
  const cardTime = card.querySelector('.popup__text--time');

  // Features
  const cardFeaturesContainer = card.querySelector('.popup__features');
  const cardFeature = cardFeaturesContainer.querySelectorAll('.popup__feature');
  const cardFeatures = similarAdvertisement[i].offer.features;

  const cardDescription = card.querySelector('.popup__description');

  //Фото
  const cardPhotosContainer = card.querySelector('.popup__photos');
  const cardPhotoTemplate = cardPhotosContainer.querySelector('.popup__photo');
  const photosArray = similarAdvertisement[i].offer.photos;

  const cardAvatar = card.querySelector('.popup__avatar');

  const mapCanvas = document.querySelector('#map-canvas');

  // Вывод первого объявления
  if (!cardCounter) {
    mapCanvas.appendChild(card);
    cardCounter = 1;
  }

  // Сравниваем значение из offer.type с массивом typeOfHousing
  const comparisonType = Object.keys(typeOfHousing).some(
    (key) => key === itemType
  );

  if (comparisonType) {
    cardType.textContent = typeOfHousing[itemType];
  }

  // Выводим только те удобства, которые есть в данном объявлении
  cardFeature.forEach((cardFeatureItem) => {
    const isNecessary = cardFeatures.some((feature) =>
      cardFeatureItem.classList.contains(`popup__feature--${feature}`)
    );

    if (!isNecessary) {
      cardFeatureItem.remove();
    }
  });

  // Вставляем фотографии
  cardPhotosContainer.innerHTML = '';
  photosArray.forEach((photoSrc) => {
    const newPhoto = cardPhotoTemplate.cloneNode(true);
    newPhoto.src = photoSrc;
    cardPhotosContainer.appendChild(newPhoto);
  });

  cardTitle.textContent = similarAdvertisement[i].offer.title;
  cardAddress.textContent = similarAdvertisement[i].offer.address;
  cardPrice.textContent = `${similarAdvertisement[i].offer.price} ₽/ночь`;
  cardCapacity.textContent = `${similarAdvertisement[i].offer.rooms} комнаты для ${similarAdvertisement[i].offer.guests} гостей`;
  cardTime.textContent = `Заезд после ${similarAdvertisement[i].offer.checkin},выезд до ${similarAdvertisement[i].offer.checkout}`;
  cardAvatar.src = similarAdvertisement[i].autor.avatar;

  // Если нет описания, то скрываем поле с описанием
  if (similarAdvertisement[i].offer.description) {
    cardDescription.textContent = similarAdvertisement[i].offer.description;
  } else {
    cardDescription.style.display = 'none';
  }
}
