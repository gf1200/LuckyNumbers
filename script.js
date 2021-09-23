{
    const data = {
        numbers: [],
        counter: 0
    };

    const status = {
        limitNumber: 49,
        amountOfBalls: 6
    };

    let {counter} = data;
    const {numbers} = data;
    const {limitNumber, amountOfBalls} = status;

    const ballsContainer = '.balls';
    const ballsElements = '.ball';
    const numbersContainer = '.results';
    const generatorBtn = '.generator';
    const nextBtn = '.next';
    const hide = 'hide';
    const clean = '.clean'

    function init() {
        document.querySelector(generatorBtn).addEventListener("click", generateNumbers);
        document.querySelector(clean).addEventListener("click", cleanAll);
        document.querySelector(nextBtn).addEventListener("click", displayNumbersList);
        createBallElement();
    };

    function createBallElement() {
        for (let i = 0; i < amountOfBalls; i++) {
            const element = document.createElement('div');
            element.className = `ball_${i + 1} ball`;
            element.textContent = '-';
            document.querySelector(ballsContainer).appendChild(element);
        };
    };

    function generateNumbers() {
        document.querySelector(generatorBtn).classList.add(hide);
        for (let i = 0; i < amountOfBalls; i++) {
            setTimeout(displayBallNumber, `${(i + 1) * 600}`);
        };
    };

    function cleanAll() {
        counter = 0;
        document.querySelector(numbersContainer).innerHTML = '';
        document.querySelector(generatorBtn).classList.remove(hide);
        resetNumbers();
    };

    function displayBallNumber() {
        const number = getRandomNumber(limitNumber);
        putNumberToData(number);
        printBallNumber();
        displayNextAndCleanBtn();
    };

    function displayNumbersList() {
        counter++;
        putNumbersIntoList(counter);
        resetNumbers();
        generateNumbers();
    };

    function getRandomNumber(limitNumber) {
       return Math.floor((Math.random() * limitNumber) + 1);
    };

    function addZeroIfUnity(number) {
        const unityNumber = number < 10;
        if (unityNumber) {
            return number = `0${number}`;
        };
        return number.toString();
    };

    function putNumberToData(number) {
        const uniqueNumber = !(numbers.includes(addZeroIfUnity(number)));
        if (uniqueNumber) {
            return numbers.push(addZeroIfUnity(number));
        };
        return  displayBallNumber();
    };

    function printBallNumber() {
        const number = numbers[numbers.length -1];
        document.querySelector(`.ball_${numbers.length}`).textContent = number;
    };

    function displayNextAndCleanBtn() {
        const lastBall = numbers.length === amountOfBalls;
        if (lastBall) {
            document.querySelector(nextBtn).classList.remove(hide);
            document.querySelector(clean).classList.remove(hide);
        };
    };

    function putNumbersIntoList(itemNumber) {
        element = `<div class="numbers"><span class="counter">${itemNumber}:</span>${numbers.join('  .  ')}</div>`;
        document.querySelector(numbersContainer).insertAdjacentHTML('afterbegin', element);
    };

    function resetNumbers() {
        document.querySelectorAll(ballsElements).forEach(element => element.textContent = "-" );
        document.querySelector(nextBtn).classList.add(hide);
        document.querySelector(clean).classList.add(hide);
        numbers.length = 0;
    };
}
init();