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

    const selectors = {
        ballsContainer:'.balls',
        ballsElements: '.ball',
        numbersContainer: '.results',
        generatorBtn: '.generator',
        nextBtn: '.next',
        clean: '.clean',
        hide: 'hide',
        disable: 'disabled'
    };

    const numbersContainer = document.querySelector(selectors.numbersContainer);
    const generatorBtn = document.querySelector(selectors.generatorBtn);
    const cleanBtn = document.querySelector(selectors.clean);
    const nextBtn = document.querySelector(selectors.nextBtn);

    function init() {
        generatorBtn.addEventListener("click", generateNumbers);
        cleanBtn.addEventListener("click", cleanAll);
        nextBtn.addEventListener("click", displayNumbersList);
        createBallElement();
    };

    function createBallElement() {
        for (let i = 0; i < amountOfBalls; i++) {
            const element = document.createElement('div');
            element.className = `ball_${i + 1} ball`;
            element.textContent = '-';
            document.querySelector(selectors.ballsContainer).appendChild(element);
        };
    };

    function generateNumbers() {
        generatorButton.disable();
        for (let i = 0; i < amountOfBalls; i++) {
            setTimeout(displayBallNumber, (i + 1) * 300);
        };
    };

    function cleanAll() {
        counter = 0;
        numbersContainer.innerHTML = '';
        generatorButton.enable();
        generatorButton.show();
        buttons.hide();
        resetNumbers();
    };

    function displayBallNumber() {
        const number = getRandomNumber(limitNumber);
        putNumberToData(number);
        printBallNumber();
        buttons.display();
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

    function putNumbersIntoList(itemNumber) {
        element = `<div class="numbers"><span class="counter">${itemNumber}:</span>${numbers.join('  .  ')}</div>`;
        numbersContainer.insertAdjacentHTML('afterbegin', element);
    };

    function resetNumbers() {
        document.querySelectorAll(selectors.ballsElements).forEach(element => element.textContent = "-" );
        numbers.length = 0;
        buttons.disable();
    };

    const generatorButton = {
        disable() {
            generatorBtn.classList.add(selectors.disable);
            generatorBtn.setAttribute('disabled', '');
        },

        enable() {
            generatorBtn.classList.remove(selectors.disable);
            generatorBtn.removeAttribute('disabled', '');
        },

        hide() {
            generatorBtn.classList.add(selectors.hide);
        },

        show() {
            generatorBtn.classList.remove(selectors.hide);
        }
    };

    const buttons = {
        disable() {
            nextBtn.classList.add(selectors.disable);
            nextBtn.setAttribute('disabled', '');
            cleanBtn.classList.add(selectors.disable);
            cleanBtn.setAttribute('disabled', '');
        },

        enable() {
            nextBtn.classList.remove(selectors.disable);
            nextBtn.removeAttribute('disabled', '');
            cleanBtn.classList.remove(selectors.disable);
            cleanBtn.removeAttribute('disabled', '');
        },

        hide() {
            nextBtn.classList.add(selectors.hide);
            cleanBtn.classList.add(selectors.hide);
        },

        show() {
            nextBtn.classList.remove(selectors.hide);
            cleanBtn.classList.remove(selectors.hide);
        },

        display() {
            const lastBall = numbers.length === amountOfBalls;
            if (lastBall) {
                generatorButton.hide();
                buttons.enable();
                buttons.show();
            };
        }
    };
};
init();