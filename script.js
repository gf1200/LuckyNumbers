{
    const data = {
        numbers: [],
        limitNumber: 49,
        selectors: {
            ballsElements: ".ball",
            generator: ".generator",
            reset: ".reset"
        }
    };

    let {numbers, limitNumber, selectors: {ballsElements},
                               selectors: {generator},
                               selectors: {reset}} = data;

    function init() {
        document.querySelector(generator).addEventListener("click", displayNumber);
        document.querySelector(reset).addEventListener("click", resetNumbers);
        resetNumbers();
    };

    function displayNumber() {
        const ballsLimitNr = numbers.length < 6;

        if (ballsLimitNr) {
            const number = randomNumber(limitNumber);
            putNumber(number);
            printNumber();
            displayResetBtn();
        };
    };

    function resetNumbers() {
        document.querySelectorAll(ballsElements).forEach(element => element.textContent = "-" )
        document.querySelector(reset).classList.add("hidden");
        numbers.length = 0;
    };

    function randomNumber(limitNumber) {
        return Math.floor((Math.random() * limitNumber) + 1)
    };

    function putNumber(number) {
        if (!(numbers.includes(number))) {
            numbers.push(number);
        } else {
            displayNumber();
        };
    };

    function printNumber() {
        document.querySelector(`.ball_${numbers.length}`).textContent = numbers[numbers.length -1];
    };

    function displayResetBtn() {
        const lastBall = numbers.length === 6;
        if (lastBall) {
            document.querySelector(reset).classList.remove("hidden");
        };
    };
}

init();