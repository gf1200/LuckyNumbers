{
    const data = {
        numbers: [],
        counter: 0,
        limitNumber: 49,
        ballsNumber: 6,
        selectors: {
            ballsElements: '.ball',
            numbersContainer: '.results',
            generatorBtn: '.generator',
            nextBtn: '.next',
            hide: 'hide'
        }
    };

    let {numbers, counter, limitNumber, ballsNumber, selectors: {ballsElements},
                                                     selectors: {numbersContainer},
                                                     selectors: {generatorBtn},
                                                     selectors: {nextBtn},
                                                     selectors: {hide}} = data;

    function init() {
        document.querySelector(generatorBtn).addEventListener("click", generateNumbers);
        document.querySelector(nextBtn).addEventListener("click", displayNumbersList);
    };

    function generateNumbers() {
        document.querySelector(generatorBtn).classList.add(hide);

        for (let i = 0; i < ballsNumber; i++) {
            setTimeout(displayBallNumber, `${(i + 1) * 700}`);
        };
    };

    function displayBallNumber() {
        const number = getRandomNumber(limitNumber);

        putNumberToData(number);
        printBallNumber();
        displayNextBtn();
    };


    function displayNumbersList() {
        counter++;

        putNumbersIntoList(counter);
        resetNumbers();
        generateNumbers();
    };

    function getRandomNumber(limitNumber) {
        let number = Math.floor((Math.random() * limitNumber) + 1);

        if (number < 10) {
            number = '0'+ number;
        };
        return number;
    };

    function putNumberToData(number) {
        if (!(numbers.includes(number))) {
            numbers.push(number);
        } else {
            displayBallNumber();
        };
    };

    function printBallNumber() {
        document.querySelector(`.ball_${numbers.length}`).textContent = numbers[numbers.length -1];
    };

    function displayNextBtn() {
        const lastBall = numbers.length === ballsNumber;

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