const spoilerBlocks = document.querySelectorAll(".spoiler__block");

spoilerBlocks.forEach((spoilerBlock) => {
    if(window.innerWidth >= 540) {
        spoilerBlock.addEventListener("mouseover", (event) => {
            event.stopPropagation();
            spoilerBlock.classList.add("open-half");
        });
        spoilerBlock.addEventListener("mouseleave", (event) => {
            event.stopPropagation();
            spoilerBlock.classList.remove("open-half");
        });
    }
})

window.addEventListener("resize", () => {
    spoilerBlocks.forEach((spoilerBlock) => {
        if(window.innerWidth >= 540) {
            spoilerBlock.addEventListener("mouseover", (event) => {
                event.stopPropagation();
                spoilerBlock.classList.add("open-half");
            });
            spoilerBlock.addEventListener("mouseleave", (event) => {
                event.stopPropagation();
                spoilerBlock.classList.remove("open-half");
            });
        }
    })
});

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
