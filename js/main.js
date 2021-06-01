const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= 0 && max >=min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return 'Неверное значение';
  }
};
getRandomNumber();

const getRandomFloat = (min, max, floatNumber) => {
  if(min >= 0 && max >=min && floatNumber >= 0){
    const someNumber = (Math.random() * (max - min) + min).toFixed(floatNumber);
    return someNumber;
  } else {
    return 'Неверное значение';
  }
};
getRandomFloat();

