const header = document.getElementById("header");
let prevScrollpos = window.scrollY;

window.addEventListener("scroll", () => {
    if (window.innerWidth >= 1025) {
        let currentScrollpos = window.scrollY;

        if (currentScrollpos > prevScrollpos) {
            header.classList.add("scroll-down");
        } else {
            header.classList.remove("scroll-down");
        }

        // При прокрутке вверх
        if (currentScrollpos < prevScrollpos) {
            header.classList.add("scroll-up");
        } else {
            header.classList.remove("scroll-up");
        }

        // Обновляем позицию прокрутки
        prevScrollpos = currentScrollpos;
    }
});
