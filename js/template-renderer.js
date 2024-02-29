export const typeOfHousing = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

export function createCard(advertisement) {
  const cardTemplate = document.querySelector('#card').content;
  const newItemTemplate = cardTemplate.querySelector('.popup');
  const card = newItemTemplate.cloneNode(true);

  const cardTitle = card.querySelector('.popup__title');
  const cardAddress = card.querySelector('.popup__text--address');
  const cardPrice = card.querySelector('.popup__text--price');

  const cardType = card.querySelector('.popup__type');
  const itemType = advertisement.offer.type;

  const cardCapacity = card.querySelector('.popup__text--capacity');
  const cardTime = card.querySelector('.popup__text--time');

  const cardFeaturesContainer = card.querySelector('.popup__features');
  const cardFeature = cardFeaturesContainer.querySelectorAll('.popup__feature');
  const cardFeatures = advertisement.offer.features;

  const cardDescription = card.querySelector('.popup__description');

  const cardPhotosContainer = card.querySelector('.popup__photos');
  const cardPhotoTemplate = cardPhotosContainer.querySelector('.popup__photo');
  const photosArray = advertisement.offer.photos;

  const cardAvatar = card.querySelector('.popup__avatar');

  const comparisonType = Object.keys(typeOfHousing).some(
    (key) => key === itemType
  );

  if (comparisonType) {
    cardType.textContent = typeOfHousing[itemType];
  }

  cardFeature.forEach((cardFeatureItem) => {
    const isNecessary = cardFeatures.some((feature) =>
      cardFeatureItem.classList.contains(`popup__feature--${feature}`)
    );

    if (!isNecessary) {
      cardFeatureItem.remove();
    }
  });

  cardPhotosContainer.innerHTML = '';
  photosArray.forEach((photoSrc) => {
    const newPhoto = cardPhotoTemplate.cloneNode(true);
    newPhoto.src = photoSrc;
    cardPhotosContainer.appendChild(newPhoto);
  });

  cardTitle.textContent = advertisement.offer.title;
  cardAddress.textContent = advertisement.offer.address;
  cardPrice.textContent = `${advertisement.offer.price} ₽/ночь`;
  cardCapacity.textContent = `${advertisement.offer.rooms} комнаты для ${advertisement.offer.guests} гостей`;
  cardTime.textContent = `Заезд после ${advertisement.offer.checkin},выезд до ${advertisement.offer.checkout}`;
  cardAvatar.src = advertisement.autor.avatar;

  if (advertisement.offer.description) {
    cardDescription.textContent = advertisement.offer.description;
  } else {
    cardDescription.style.display = 'none';
  }

  return card;
}
