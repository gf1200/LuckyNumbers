{
    const data = {
        numbers: [],
        counter: 0,
        limitNumber: 49,
        selectors: {
            ballsElements: '.ball',
            numbersContainer: '.results',
            generatorBtn: '.generator',
            resetBtn: '.reset'
        }
    };

    let {numbers, counter, limitNumber, selectors: {ballsElements},
                                        selectors: {numbersContainer},
                                        selectors: {generatorBtn},
                                        selectors: {resetBtn}} = data;

    function init() {
        document.querySelector(generatorBtn).addEventListener("click", displayBallNumber);
        document.querySelector(resetBtn).addEventListener("click", resetBallNumbersAndDisplayToUI);
    };

    function displayBallNumber() {
        const ballsLimitNr = numbers.length < 6;

        if (ballsLimitNr) {
            const number = randomNumber(limitNumber);
            putNumberToData(number);
            printBallNumber();
            displayResetBtn();
        };
    };

    function resetBallNumbersAndDisplayToUI() {
        document.querySelectorAll(ballsElements).forEach(element => element.textContent = "-" )
        document.querySelector(resetBtn).classList.add("hidden");
        counter++;
        displayNumbersToUI(counter);
        numbers.length = 0;
    };

    function randomNumber(limitNumber) {
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

    function displayResetBtn() {
        const lastBall = numbers.length === 6;
        if (lastBall) {
            document.querySelector(resetBtn).classList.remove("hidden");
        };
    };

    function displayNumbersToUI(itemNumber) {
        element = `<div class="numbers"><span class="counter">${itemNumber}:</span>${numbers.join('  .  ')}</div>`;
        document.querySelector(numbersContainer).insertAdjacentHTML('afterbegin', element);
    };
}

init();