const signalBlock = document.getElementById("signal");
var randomTime = Math.floor(Math.random() * 21) + 10; // генерируем случайное число от 10 до 60

signalBlock.addEventListener("click", function() { 
    const peple = document.querySelector(".peple");
    const fire = document.querySelector(".fire");
    const XXX = document.querySelector(".XXX");
    const donload = document.querySelector(".donload");

    peple.classList.add("none");
    fire.classList.add("none");
    XXX.classList.add("none");
    donload.classList.remove("none");

    donload.classList.remove("none");

    fillStatusBlock(randomTime)

    setTimeout(sayHello, randomTime * 1000);
    
});

function sayHello() {
    const peple = document.querySelector(".peple");
    const fire = document.querySelector(".fire");
    const XXX = document.querySelector(".XXX");
    const donload = document.querySelector(".donload");
    const time = document.querySelector(".time");
    const chanse = document.querySelector(".chanse");
    const pepleFire = document.querySelector(".pepleFire");

    peple.classList.remove("none");
    fire.classList.remove("none");
    XXX.classList.remove("none");
    donload.classList.add("none");
    pepleFire.style.left = '0px';

    donload.classList.add("none");

    var randomNumber1 = generateRandomNumber(2, 4);
    var randomNumber2 = generateRandomNumber(5, 20);
    XXX.innerHTML = randomNumber1 + 'X - ' + randomNumber2 + 'X';
    
    
    var randomNumber3 = generateRandomNumber(95,99);
    chanse.innerHTML = 'chance: ' + randomNumber3 + '%';

    var randomTime = getRandomTime();
    var newTime = addRandomTime(randomTime);
    time.innerHTML = 'time: ' + randomTime + " - " + newTime;

    
    var statusBlock = document.querySelector('.statusBlock');
    statusBlock.classList.remove('filling'); // добавляем класс для заполнения
}

function fillStatusBlock(randomTime) {
    var statusBlock = document.querySelector('.statusBlock');
    statusBlock.style.transition = randomTime + 's'; // устанавливаем продолжительность анимации в секундах
    statusBlock.classList.add('filling'); // добавляем класс для заполнения
}

function getRandomTime() {
    // Получаем текущую дату и время
    var currentDateTime = new Date();
  
    // Генерируем случайное количество минут от 1 до 3
    var randomMinutes = Math.floor(Math.random() * 3) + 1;
  
    // Генерируем случайное количество секунд от 1 до 59
    var randomSeconds = Math.floor(Math.random() * 59) + 1;
  
    // Добавляем случайное количество минут и секунд к текущему времени
    currentDateTime.setMinutes(currentDateTime.getMinutes() + randomMinutes);
    currentDateTime.setSeconds(currentDateTime.getSeconds() + randomSeconds);
  
    // Форматируем время в строку (чч:мм:сс)
    var formattedTime = currentDateTime.getHours().toString().padStart(2, '0') + ':' +
                        currentDateTime.getMinutes().toString().padStart(2, '0') + ':' +
                        currentDateTime.getSeconds().toString().padStart(2, '0');
  
    // Возвращаем строку с текущим временем и добавленными минутами и секундами
    return formattedTime;
}

function addRandomTime(timeString) {
    // Разделяем строку времени на компоненты часов, минут и секунд
    var [hours, minutes, seconds] = timeString.split(':').map(Number);
  
    // Генерируем случайное количество секунд от 30 до 80
    var randomSeconds = Math.floor(Math.random() * 51) + 30;
  
    // Добавляем случайное количество секунд к исходным секундам
    seconds += randomSeconds;
  
    // Обрабатываем случаи, когда количество секунд превышает 59
    if (seconds >= 60) {
      var minutesToAdd = Math.floor(seconds / 60);
      minutes += minutesToAdd;
      seconds %= 60;
    }
  
    // Обрабатываем случаи, когда количество минут превышает 59
    if (minutes >= 60) {
      var hoursToAdd = Math.floor(minutes / 60);
      hours += hoursToAdd;
      minutes %= 60;
    }
  
    // Форматируем компоненты времени обратно в строку
    var formattedTime = hours.toString().padStart(2, '0') + ':' +
                        minutes.toString().padStart(2, '0') + ':' +
                        seconds.toString().padStart(2, '0');
  
    return formattedTime;
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  