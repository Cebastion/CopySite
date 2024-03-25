const spoiler = document.querySelectorAll(".spoiler__block");
spoiler.forEach((spoiler) => {
    spoiler.addEventListener("click", () => {
        spoiler.classList.toggle("open");
    });
})