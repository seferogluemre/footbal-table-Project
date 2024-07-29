const changeTeamName1 = document.getElementById('changeTeamName1');
const TeamName1 = document.getElementById('Team1Name');
const changeTeamName2 = document.getElementById('changeTeamName2');
const TeamName2 = document.getElementById('Team2Name');

// Takım 1 İsim değiştirme Butonu
changeTeamName1.addEventListener('click', e => {
    let NewTeamName = prompt("Takım 1'in Yeni İsmini Giriniz");
    if (NewTeamName === "") {
        alert("Boş değer girilmez!!!");
    } else {
        TeamName1.innerHTML = NewTeamName;
    }
});

// Takım 2 İsim değiştirme Butonu
changeTeamName2.addEventListener('click', e => {
    let newTeamName2 = prompt("Takım 2'nin Yeni İsmini Giriniz");
    if (newTeamName2 === "") {
        alert("Boş değer girilmez!!!");
    } else {
        TeamName2.innerHTML = newTeamName2;
    }
});

// Takım 1 Skorunu Değiştirme
const Team1NewScore = document.getElementById('team1-scoreincrease');
const Team1ScoreReduction = document.getElementById('team1-scorereduction');
const Team1ScoreCount = document.getElementById('team1ScoreCount');

Team1NewScore.addEventListener('click', e => {
    let Team1Score = prompt("Takım 1'in Skorunu Giriniz");

    // Sayısal değeri kontrol et
    if (Team1Score === "" || isNaN(Team1Score)) {
        alert("Geçerli bir sayı giriniz!!!");
    } else {
        // Sayıya dönüştür ve güncelle
        Team1ScoreCount.innerHTML = parseInt(Team1Score, 10);
    }
});

// Takım 1 Skor Azaltma
Team1ScoreReduction.addEventListener('click', e => {
    let currentScore = parseInt(Team1ScoreCount.innerHTML, 10);
    if (currentScore > 0) {
        currentScore--;
        Team1ScoreCount.innerHTML = currentScore;
    }
});

// Takım 2 Skorunu Değiştirme
const Team2ScoreIncrease = document.getElementById('team2-scoreincrease');
const Team2ScoreCount = document.getElementById('team2ScoreCount');
const Team2ScoreReduction = document.getElementById('team2-scorereduction');

Team2ScoreIncrease.addEventListener('click', e => {
    let Team2NewScore = prompt("Takım 2'nin Skorunu Giriniz");

    // Sayısal değeri kontrol et
    if (Team2NewScore === "" || isNaN(Team2NewScore)) {
        alert("Geçerli bir sayı giriniz!!!");
    } else {
        // Sayıya dönüştür ve güncelle
        Team2ScoreCount.innerHTML = parseInt(Team2NewScore, 10);
    }
});

// Takım 2 Skor Azaltma
Team2ScoreReduction.addEventListener('click', e => {
    let team2Score = parseInt(Team2ScoreCount.innerHTML, 10);
    // Negatif değeri kabul etmedik
    if (team2Score > 0) {
        team2Score--;
        Team2ScoreCount.innerHTML = team2Score;
    }
});
