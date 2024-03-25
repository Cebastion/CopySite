const cardResult = document.querySelector(".card__result");
const cardFront = cardResult.querySelector(".card__front");
const cardBack = cardResult.querySelector(".card__back");

cardResult.addEventListener("mouseenter", () => {
    cardResult.classList.add("flipped");
    cardFront.classList.add("flipped");
    cardBack.classList.add("flipped");
});

cardResult.addEventListener("mouseleave", () => {
    cardResult.classList.remove("flipped");
    cardFront.classList.remove("flipped");
    cardBack.classList.remove("flipped");
});
