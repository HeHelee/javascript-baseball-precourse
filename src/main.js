//컴퓨터가 입력한 값, 0~9까지 랜덤으로 3자리 수 생성
let numbers = generatedRandomNumber()

function generatedRandomNumber() {
    let randomNumbers = []
    while(randomNumbers.length < 3) {
        const num = Math.floor(Math.random() * 10);
        if (!randomNumbers.includes(num))
            randomNumbers.push(num)
    }
    return randomNumbers
}

//사용자가 입력한 값
let answer;

window.onload = function() {
    const submitButton = document.getElementById('submitButton')
    submitButton.addEventListener('click,' , () => {
        answer = checkAnswer(answer)
        if(answer) {
            evaluateGuess(answer)
        }
    });
};



