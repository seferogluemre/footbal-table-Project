function increaseScore(teamName) {
  const scoreId = `TeamScore${teamName}`;
  const scoreElement = document.getElementById(scoreId);
  scoreElement.innerText++;
}

function toggleClassTemporarily(element, className, duration) {
  element.classList.remove(className);
  setTimeout(function () {
    element.classList.add(className);
  }, duration);
}

function decreaseScore(teamName) {
  const scoreId = `TeamScore${teamName}`;
  const scoreElement = document.getElementById(scoreId);
  const scoreInteger = Number(scoreElement.innerText);
  if (scoreInteger > 0) {
    scoreElement.innerText--;
  } else {
    // Skor 0 iken azaltmaya çalışılırsa alert gösterilmesi
    const myElement = document.getElementById("liveAlertPlaceholder");
    toggleClassTemporarily(myElement, "d-none", 3000);
  }
}

function setNamePrompt(teamName) {
  const teamId = `Team${teamName}`;
  const teamNameElement = document.getElementById(teamId);
  const teamNamePrompt = prompt("Takımın Yeni İsmini giriniz");
  teamNameElement.innerText = teamNamePrompt;
}

function setScorePrompt(teamName) {
  const score = prompt("Takımın Skorunu Girin");
  if (!isNaN(score) && score != null) {
    const parseIntScore = Number(score);
    if (Number.isInteger(parseIntScore) && parseIntScore >= 0) {
      if (parseIntScore > 15) {
        alert("Hoop Emmioglu Basketbol mu oynuyorsun O skor ne");
      } else {
        document.getElementById(`TeamScore${teamName}`).textContent =
          parseIntScore;
      }
    }
  }
}

function teamScoreReset(teamName) {
  const scoreReset = `TeamScore${teamName}`;
  const scoreElement = document.getElementById(scoreReset);
  scoreElement.textContent = "0";
}
