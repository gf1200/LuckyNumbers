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

    function init() {
        document.querySelector(generatorBtn).addEventListener("click", generateNumbers);
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
            setTimeout(displayBallNumber, `${(i + 1) * 700}`);
        };
    };

    function displayBallNumber() {
        const number = getRandomNumber(limitNumber);

        putNumberToData(number);
        printBallNumber();
        displayNextBtn();
        console.log(numbers)
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

    function addZeroToUnity(number) {
        (number < 10) ? number = `0${number}` : number;
        return number.toString();
    };

    function putNumberToData(number) {
        const uniqueNumber = !(numbers.includes(addZeroToUnity(number)));

        if (uniqueNumber) {
            numbers.push(addZeroToUnity(number));
        } else {
            displayBallNumber();
        };
    };

    function printBallNumber() {
        const number = numbers[numbers.length -1];
        document.querySelector(`.ball_${numbers.length}`).textContent = number;
    };

    function displayNextBtn() {
        const lastBall = numbers.length === amountOfBalls;

        if (lastBall) {
            document.querySelector(nextBtn).classList.remove(hide);
        };
    };

    function putNumbersIntoList(itemNumber) {
        element = `<div class="numbers"><span class="counter">${itemNumber}:</span>${numbers.join('  .  ')}</div>`;
        document.querySelector(numbersContainer).insertAdjacentHTML('afterbegin', element);
    };

    function resetNumbers() {
        document.querySelectorAll(ballsElements).forEach(element => element.textContent = "-" );
        document.querySelector(nextBtn).classList.add(hide);
        numbers.length = 0;
    };
}
init();