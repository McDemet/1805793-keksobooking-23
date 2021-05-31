function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= 0 && max >=min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return 'Неверное значение';
  }
}

getRandomNumber();

function getRandomFloat(min, max, randomFloat){
  if(min >= 0 && max >=min ){
    return Math.random() * (max - min) + min + randomFloat;
  } else {
    return 'Неверное значение';
  }

}
getRandomFloat().toFixed(3);
