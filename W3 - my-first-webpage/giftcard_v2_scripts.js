const numOfPeopleInput = document.getElementById("numOfPeople");
const generateInputFieldsButton = document.getElementById("generateInputFields");
const nameInputsDiv = document.getElementById("nameInputs");
const startLotteryButton = document.getElementById("startLottery");
const resultParagraph = document.getElementById("result");

generateInputFieldsButton.addEventListener("click", () => {
    const numOfPeople = parseInt(numOfPeopleInput.value);
    nameInputsDiv.innerHTML = "";
    for (let i = 1; i <= numOfPeople; i++) {
        const nameLabel = document.createElement("label");
        nameLabel.textContent = `${numOfPeople}번째 중 ${i}번째 사람 이름 입력`;
        nameInputsDiv.appendChild(nameLabel);
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.classList.add("name");
        nameInputsDiv.appendChild(nameInput);
    }
    startLotteryButton.style.display = "block";
});

startLotteryButton.addEventListener("click", () => {
    resultParagraph.textContent = "추첨 중입니다...";
    const names = Array.from(document.getElementsByClassName("name")).map(input => input.value);

    setTimeout(() => {
        const winnerIndex = Math.floor(Math.random() * names.length);
        const winner = names[winnerIndex];
        resultParagraph.textContent = `축하합니다! 당첨자는 ${winner}입니다!`;
    }, 3000);
});
