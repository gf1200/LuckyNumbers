const generatorButton = document.querySelector(".generator")

const resetButton = document.querySelector(".reset")
resetButton.addEventListener("click", () => {
        reset()
});

function randomNumber(closingNumber) {
    return Math.floor((Math.random() * closingNumber) + 1)
};

function insertNumber() {
    const numbers = [];

    generatorButton.addEventListener("click",  click = () => {
        const number = randomNumber(49);

        if (numbers.indexOf(number) === -1 && numbers.length < 6) {
            numbers.push(number)

            if (numbers[5] !== undefined) {
                resetButton.classList.remove("hidden")

                } else {
                resetButton.addEventListener("click", () => {
                    resetButton.classList.add("hidden")
                    });
                };

            const ballElement = document.querySelector(`.ball_${numbers.length}`)
            ballElement.textContent = numbers[numbers.length -1]

        } else if (numbers.length < 6) {
            click()
        };
    });
};

insertNumber()

function reset() {
    const ballElements = document.querySelectorAll(".balls > div")
    ballElements.forEach(element => element.textContent = "-" )

    insertNumber()
};

