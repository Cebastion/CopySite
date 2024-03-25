const spoilerBlocks = document.querySelectorAll(".spoiler__block");

spoilerBlocks.forEach((spoilerBlock) => {
    spoilerBlock.addEventListener("click", (event) => {
        event.stopPropagation();
        spoilerBlock.classList.toggle("open");
    });
});

const spoilerTexts = document.querySelectorAll(".spoiler__text");

spoilerTexts.forEach((spoilerText) => {
    spoilerText.addEventListener("click", (event) => {
        event.stopPropagation();
        spoilerText.classList.toggle("open");
    });
});
