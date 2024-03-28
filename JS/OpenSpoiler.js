const spoilerBlocks = document.querySelectorAll(".spoiler__block");

function DeleteOpenHalf() {
    spoilerBlocks.forEach((spoilerBlock) => {
        spoilerBlock.classList.remove("open-half");
    });
}

spoilerBlocks.forEach((spoilerBlock) => {
    if (window.innerWidth >= 768) {
        spoilerBlock.addEventListener("mouseover", (event) => {
            event.stopPropagation();
            if(!spoilerBlock.classList.contains('open')){
                spoilerBlock.classList.add("open-half");
                spoilerBlock.style.maxHeight = "150px";
            }
        });
        spoilerBlock.addEventListener("mouseleave", (event) => {
            event.stopPropagation();
            if(!spoilerBlock.classList.contains('open')){
                const currentBlock = event.currentTarget
                const topBlock = currentBlock.querySelector(".spoiler__top");
                spoilerBlock.classList.remove("open-half");
                spoilerBlock.style.maxHeight = topBlock.scrollHeight + 38 + "px";
            }
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

window.addEventListener("resize", DeleteOpenHalf);


spoilerBlocks.forEach((spoilerBlock) => {
    spoilerBlock.addEventListener("click", (event) => {
        event.stopPropagation();
        const currentBlock = event.currentTarget
        const topBlock = currentBlock.querySelector(".spoiler__top");
        spoilerBlock.classList.toggle("open");
        if (spoilerBlock.classList.contains("open")) {
            spoilerBlock.style.maxHeight = spoilerBlock.scrollHeight + "px";
        } else {
            spoilerBlock.style.maxHeight = topBlock.scrollHeight + 38 + "px";
        }
    });
});

const spoilerTexts = document.querySelectorAll(".spoiler__text");

spoilerTexts.forEach((spoilerText) => {
    spoilerText.addEventListener("click", (event) => {
        event.stopPropagation();
        const currentBlock = event.currentTarget;
        const currentParentBlock = currentBlock.parentElement.parentElement;
        const span = currentBlock.querySelector("span");
        spoilerText.classList.toggle("open");
        if (spoilerText.classList.contains("open") && window.innerWidth <= 768) {
            spoilerText.style.height = spoilerText.scrollHeight + "px"; // Изменено на span.scrollHeight
            currentParentBlock.style.maxHeight = currentParentBlock.scrollHeight + spoilerText.scrollHeight + "px"; // Изменено на сумму высот текста и высоты блока
        } else {
            spoilerText.style.height = span.scrollHeight + "px";
            currentParentBlock.style.maxHeight = currentParentBlock.scrollHeight - span.scrollHeight + "px"; // Изменено на вычитание высоты текста
        }
    });
});


///////////////////////

const questionBlocks = document.querySelectorAll(".question__block");
const questionButtons = document.querySelectorAll(".question__button");
const rectsThitry = document.querySelectorAll(".rect-3");
const rectsFourty = document.querySelectorAll(".rect-4");

questionBlocks.forEach((questionBlock) => {
    questionBlock.addEventListener("mouseover", (event) => {
        event.stopPropagation();
        const currentBlock = event.currentTarget;
        const currentButton = currentBlock.querySelector(".question__button");
        const currentRectsThitry = currentBlock.querySelectorAll(".rect-3");
        const currentRectsFourty = currentBlock.querySelectorAll(".rect-4");

        currentButton.classList.add("black-background");
        currentRectsThitry.forEach((rect) => {
            rect.setAttribute("fill", "white");
        });
        currentRectsFourty.forEach((rect) => {
            rect.setAttribute("fill", "white");
        });
    });

    questionBlock.addEventListener("mouseleave", (event) => {
        event.stopPropagation();
        const currentBlock = event.currentTarget;
        const currentButton = currentBlock.querySelector(".question__button");
        const currentRectsThitry = currentBlock.querySelectorAll(".rect-3");
        const currentRectsFourty = currentBlock.querySelectorAll(".rect-4");

        currentButton.classList.remove("black-background");
        currentRectsThitry.forEach((rect) => {
            rect.setAttribute("fill", "black");
        });
        currentRectsFourty.forEach((rect) => {
            rect.setAttribute("fill", "black");
        });
    });

    questionBlock.addEventListener("click", (event) => {
        event.stopPropagation();
        const currentBlock = event.currentTarget;
        const contentElement = currentBlock.querySelector(".question__bottom")

        // Close all previously opened blocks
        questionBlocks.forEach((block) => {
            if (block !== questionBlock && block.classList.contains("open")) {
                block.classList.remove("open");
                const button = block.querySelector(".question__button");
                if (button) {
                    button.classList.remove("rotated");
                }

                // Reset content height for smooth closing animation
                const contentElement = block.querySelector(".question__bottom"); // Assuming content resides within .question__bottom
                if (contentElement) {
                    contentElement.style.height = "0px";
                }
            }
        });

        questionBlock.classList.toggle("open"); // Toggle open/closed state for clicked block

        if (questionBlock.classList.contains("open")) {
            // Open animation: Set height to scrollHeight for smooth reveal
            const contentElement =
                questionBlock.querySelector(".question__bottom");
            if (contentElement) {
                contentElement.style.height = `${contentElement.scrollHeight}px`;
            }
        } else {
            // Close animation: Set height to 0px for smooth collapse
            const contentElement =
                questionBlock.querySelector(".question__bottom");
            if (contentElement) {
                contentElement.style.height = "0px";
            }
        }

        contentElement.style.transition = "height 0.3s ease-in-out"; // Apply transition to clicked block

        const button = questionBlock.querySelector(".question__button");
        if (button) {
            button.classList.toggle("rotated");
        }
    });
});
