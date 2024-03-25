function replaceContentForMobile() {
    if (window.innerWidth <= 1025) {
        // Создаем новый контент для мобильной версии
        var newMobileContent = `
        <div class="mobile-header__top">
              <div class="mobile-header__logo">
                  <a href="https://ya.ru/">
                      <img 
                          id="yandex"
                          src="https://yastatic.net/q/logoaas/v2/%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.svg?circle=black&color=000&first=white"
                          alt="Yandex"
                          style="height: 28px; width: 28px"
                      />
                  </a>
                  <a href="https://practicum.yandex.ru/">
                      <img
                          id="practicum"
                          src="https://yastatic.net/q/logoaas/v2/%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D1%83%D0%BC.svg?color=000"
                          alt="logo"
                          style="height: 28px; width: 108px"
                      />
                  </a>
              </div>
              <button id="burger" style="background: none;" type="button" class="prisma-button2 prisma-button2_size_m prisma-button2_view_clear prisma-button2_no-outline prisma-button2_with-icon mobile-menu__open-button header__mobile-menu-button prisma_theme_undefined"><span data-test-id="undefined-content" class="prisma-button2__content"><span class="prisma-button2__icon"><svg class="icon icon-list" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="5" y="14" width="14" height="2" rx="1" id="rect-1" fill="white"></rect><rect x="5" y="8" width="14" height="2" rx="1" id="rect-2" fill="white"></rect></svg></span></span></button>
              <button id="closeBurger" style="display: none; background: none;" type="button" aria-label="Закрыть" class="prisma-button2 prisma-button2_size_m prisma-button2_view_clear prisma-button2_no-outline prisma-button2_with-icon mobile-menu__close-button"><span data-test-id="undefined-content" class="prisma-button2__content"><span class="prisma-button2__icon"><svg class="icon icon-close" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13.414 12L18 16.586A1 1 0 0116.586 18l-5.39-5.39a.862.862 0 010-1.22L16.585 6A1 1 0 1118 7.414L13.414 12z" fill="black"></path><path d="M10.879 12l-4.586 4.586A1 1 0 107.707 18l5.39-5.39a.862.862 0 000-1.22L7.707 6a1 1 0 00-1.414 1.414L10.879 12z" fill="black"></path></svg></span></span></button>
          </div>
          <nav class="mobile-header__navigation" style="display: none;">
              <li>О курсе</li>
              <li>Как учим</li>
              <li>Поддержка</li>
              <li>Программа</li>
              <li>Отвечаем на вопросы</li>
          </nav>
          <div class="mobile-header__bottom" style="display: none;">
              <nav class="mobile-header__navigation__buttons">
                  <button class="mobile-navigation__button">Компаниям</button>
                  <button class="mobile-navigation__button">Все курсы</button>
                  <button class="mobile-navigation__button">
                      Записаться на курс
                  </button>
              </nav>
          </div>
        `;

        // Заменяем существующий контент на странице
        const contentHeader = document.getElementById("header");
        contentHeader.innerHTML = newMobileContent;
        const header = document.getElementById("header");
        const yandex = document.getElementById("yandex");
        const practicum = document.getElementById("practicum");

        header.classList.contains("mobile-header")
            ? yandex.setAttribute(
                  "src",
                  "https://yastatic.net/q/logoaas/v2/%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.svg?circle=black&color=000&first=white"
              )
            : yandex.setAttribute(
                  "src",
                  "https://yastatic.net/q/logoaas/v2/Яндекс.svg?circle=white&color=fff&first=black"
              );

        header.classList.contains("mobile-header")
            ? practicum.setAttribute(
                  "src",
                  "https://yastatic.net/q/logoaas/v2/%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D1%83%D0%BC.svg?color=000"
              )
            : practicum.setAttribute(
                  "src",
                  "https://yastatic.net/q/logoaas/v2/Практикум.svg?color=fff"
              );
    }

    const burger = document.getElementById("burger");
    const header = document.getElementById("header");
    const closeBurger = document.getElementById("closeBurger");
    const navigationPage = document.querySelector(".mobile-header__navigation");
    const navigationButton = document.querySelector(".mobile-header__bottom");
    const yandex = document.getElementById("yandex");
    const practicum = document.getElementById("practicum");

    const toggleMenuDisplay = () => {
        burger.style.display = header.classList.toggle("mobile-header")
            ? "none"
            : "block";
        closeBurger.style.display = header.classList.contains("mobile-header")
            ? "block"
            : "none";
        navigationPage.style.display = header.classList.contains(
            "mobile-header"
        )
            ? "block"
            : "none";
        navigationButton.style.display = header.classList.contains(
            "mobile-header"
        )
            ? "block"
            : "none";
        header.classList.contains("mobile-header")
            ? yandex.setAttribute(
                  "src",
                  "https://yastatic.net/q/logoaas/v2/%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.svg?circle=black&color=000&first=white"
              )
            : yandex.setAttribute(
                  "src",
                  "https://yastatic.net/q/logoaas/v2/Яндекс.svg?circle=white&color=fff&first=black"
              );

        header.classList.contains("mobile-header")
            ? practicum.setAttribute(
                  "src",
                  "https://yastatic.net/q/logoaas/v2/%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D1%83%D0%BC.svg?color=000"
              )
            : practicum.setAttribute(
                  "src",
                  "https://yastatic.net/q/logoaas/v2/Практикум.svg?color=fff"
              );
    };

    burger.addEventListener("click", toggleMenuDisplay);
    closeBurger.addEventListener("click", toggleMenuDisplay);

    if (window.innerWidth <= 540) {
        const firstRect = document.getElementById('rect-1') 
        const secondtRect = document.getElementById('rect-2') 
        yandex.setAttribute(
            "src",
            "https://yastatic.net/q/logoaas/v2/%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.svg?circle=black&color=000&first=white"
        );
        practicum.setAttribute(
            "src",
            "https://yastatic.net/q/logoaas/v2/%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D1%83%D0%BC.svg?color=000"
        )
        secondtRect.setAttribute('fill', 'black')
        firstRect.setAttribute('fill', 'black')
    }
}

// Вызываем функцию при загрузке страницы и при изменении размера экрана
window.addEventListener("resize", replaceContentForMobile);
replaceContentForMobile();
