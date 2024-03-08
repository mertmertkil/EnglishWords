const buttonRandom = document.getElementById("buttonRandom");
const buttonShow = document.getElementById("buttonShow");
const englishWords = [
    "apple",
    "banana",
    "car",
    "house",
    "computer",
    "table",
    "book",
    "pencil",
    "sun",
    "moon"
];
const turkishWords = [
    "elma",
    "muz",
    "araba",
    "ev",
    "bilgisayar",
    "masa",
    "kitap",
    "kalem",
    "güneş",
    "ay"
];
const wordEnElement = document.querySelector(".wordEn");
const wordTrElement = document.querySelector(".wordTr");

let currentIndex = null;

buttonRandom.addEventListener("click", function(){
    currentIndex = Math.floor(Math.random() * englishWords.length);
    const randomEnglishWord = englishWords[currentIndex];
    const randomTurkishWord = turkishWords[currentIndex];

    wordEnElement.textContent = randomEnglishWord;
    wordTrElement.textContent = "";
});

buttonShow.addEventListener("click", function(){
    if (currentIndex !== null) {
        const randomTurkishWord = turkishWords[currentIndex];
        wordTrElement.textContent = randomTurkishWord;
    }
});
