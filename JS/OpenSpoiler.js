const spoilerBlocks = document.querySelectorAll(".spoiler__block");

spoilerBlocks.forEach((spoilerBlock) => {
    if (window.innerWidth >= 768) {
        spoilerBlock.addEventListener("mouseover", (event) => {
            event.stopPropagation();
            spoilerBlock.classList.add("open-half");
        });
        spoilerBlock.addEventListener("mouseleave", (event) => {
            event.stopPropagation();
            spoilerBlock.classList.remove("open-half");
        });
    }
});

window.addEventListener("resize", () => {
    spoilerBlocks.forEach((spoilerBlock) => {
        if (window.innerWidth >= 768) {
            spoilerBlock.addEventListener("mouseover", (event) => {
                event.stopPropagation();
                spoilerBlock.classList.add("open-half");
            });
            spoilerBlock.addEventListener("mouseleave", (event) => {
                event.stopPropagation();
                spoilerBlock.classList.remove("open-half");
            });
        }
    });
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

///////////////////////

const questionBlocks = document.querySelectorAll(".question__block");
const questionButtons = document.querySelectorAll(".question__button");
const rectsThitry = document.querySelectorAll('.rect-3')
const rectsFourty = document.querySelectorAll('.rect-4')

questionBlocks.forEach((questionBlock) => {
    questionBlock.addEventListener("mouseover", (event) => {
        event.stopPropagation();
        const currentBlock = event.currentTarget;
        const currentButton = currentBlock.querySelector(".question__button");
        const currentRectsThitry = currentBlock.querySelectorAll('.rect-3');
        const currentRectsFourty = currentBlock.querySelectorAll('.rect-4');
        
        currentButton.classList.add("black-background");
        currentRectsThitry.forEach((rect) => {
            rect.setAttribute('fill', 'white');
        });
        currentRectsFourty.forEach((rect) => {
            rect.setAttribute('fill', 'white');
        });
    });

    questionBlock.addEventListener("mouseleave", (event) => {
        event.stopPropagation();
        const currentBlock = event.currentTarget;
        const currentButton = currentBlock.querySelector(".question__button");
        const currentRectsThitry = currentBlock.querySelectorAll('.rect-3');
        const currentRectsFourty = currentBlock.querySelectorAll('.rect-4');
        
        currentButton.classList.remove("black-background");
        currentRectsThitry.forEach((rect) => {
            rect.setAttribute('fill', 'black');
        });
        currentRectsFourty.forEach((rect) => {
            rect.setAttribute('fill', 'black');
        });
    });

    questionBlock.addEventListener("click", (event) => {
        event.stopPropagation();

        questionBlocks.forEach((block) => {
            if (block !== questionBlock && block.classList.contains("open")) {
                block.classList.remove("open");
                const button = block.querySelector(".question__button");
                if (button) {
                    button.classList.remove("rotated");
                }
            }
        });

        questionBlock.classList.toggle('open');
        const button = questionBlock.querySelector(".question__button");
        if (button) {
            button.classList.toggle("rotated");
        }
    });
});
