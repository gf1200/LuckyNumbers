const randomNumber = (closingNumber) => {
        return Math.floor((Math.random() * closingNumber) + 1)
};



const insertNumber = (closingNumber) => {

    const generatorButton = document.querySelector(".generator")
    const numbers = [];

    generatorButton.addEventListener("click",  click = () => {

        const number = randomNumber(closingNumber);

        if (numbers.indexOf(number) === -1 && numbers.length < 6) {

            numbers.push(number)
            const ballElement = document.querySelector(`.ball_${numbers.length}`)
            ballElement.textContent = numbers[numbers.length -1]

        } else if (numbers.length < 6) {

            click()
        };
    });
};

insertNumber(49)
