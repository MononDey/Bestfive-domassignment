function checkPlayerListById(elementId) {
    let playerList = document.getElementById(elementId);
    let list = playerList.children;
    if (list.length > 4) {
        alert("Only Five player can be selected!");
        return exit;
    }
    return list.length;
}

function setPlayerInListById(elementId, newValue) {
    const getPlayer = document.getElementById(elementId);
    const li = document.createElement('li');
    li.innerText = newValue;
    getPlayer.appendChild(li);

    return getPlayer;
}

function getTextPlayerTitleById(elementId) {
    const playerTitleText = document.getElementById(elementId);
    const playerTitleTextString = playerTitleText.innerText;

    return playerTitleTextString;
}


function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);

    return inputFieldValue;

}

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textValue = parseFloat(textElementValueString);

    return textValue;

}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;

}

