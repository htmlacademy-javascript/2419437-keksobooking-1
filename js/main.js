const ADVERTISEMENT_COUNT = 10;

const OFFER_TITLES = [
  'Жилье в центре',
  'Тихое уединенное место',
  'Рядом с аэропортом',
  'Уютное жилье рядом с парком',
  'Лучшее предложение',
];

const OFFER_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const OFFER_CHEKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const OFFER_CHEKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];

const OFFER_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const OFFER_DESCRIPTIONS = [
  'Уютная студия в центре города с современным дизайном, полностью оборудованной кухней и панорамным видом на городскую черту. Идеально подходит для одиноких путешественников или пары.',
  'Просторная квартира с двумя спальнями в тихом пригороде, рядом с парком и магазинами. Полностью меблирована, с балконом и доступом к общему бассейну. Подходит для семейного отдыха.',
  'Светлая и стильная квартира в историческом центре города. С высокими потолками, антикварной мебелью и современной техникой. Идеально для ценителей атмосферы старого города.',
  'Очаровательный домик на берегу озера с приватным пляжем и прекрасным видом на воду. Полностью оборудованная кухня, терраса для барбекю и уютная гостиная. Отличный выбор для романтического отдыха.',
  'Современная квартира в бизнес-районе с близким доступом к транспорту и офисам. Стильный интерьер, рабочее пространство, фитнес-зал в здании. Подходит для деловых путешественников и тех, кто ценит комфорт.',
];

const OFFER_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

let avatarImageIndexes = Array.from(Array(10), (_, i) => i + 1);

const getFilterList = (randomIndex) => avatarImageIndexes.filter((item) => item !== randomIndex);


const createAdvertisement = () => {
  let randomIndex = getRandomArrayElement(avatarImageIndexes);

  avatarImageIndexes = getFilterList(randomIndex);

  if(randomIndex < 10) {
    randomIndex = `0${randomIndex}`;
  }

  return {
    autor: {
      avatar:`img/avatars/user${[randomIndex]}.png`,
    },
    offer: {
      title: getRandomArrayElement(OFFER_TITLES),
      addres:'',
      price: getRandomInteger(3, 10) * 1000,
      type: getRandomArrayElement(OFFER_TYPES),
      rooms: getRandomInteger(1, 5),
      quests: getRandomInteger(1, 7),
      checkin: getRandomArrayElement(OFFER_CHEKINS),
      checkout: getRandomArrayElement(OFFER_CHEKOUTS),
      features: OFFER_FEATURES.slice(0, getRandomInteger(1, OFFER_FEATURES.length)),
      description: getRandomArrayElement(OFFER_DESCRIPTIONS),
      photos: OFFER_PHOTOS.slice(0, getRandomInteger(1, OFFER_PHOTOS.length)),
    },
    location: {
      lat: getRandomInteger(3565000, 3570000) / 100000,
      lng: getRandomInteger(13970000, 13980000) / 100000,
    }
  };
};

const similarAdvertisement = Array.from({length: ADVERTISEMENT_COUNT}, createAdvertisement);

console.log(similarAdvertisement);