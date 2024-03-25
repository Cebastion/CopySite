function replaceContentForMobile() {
    if (window.innerWidth <= 540) {
        var newMobileContent = `
        <div class="banner__top">
    <div class="top__block-text">
        <span>Маркетинг</span>
        <span>С нуля</span>
    </div>
    <h2>Курс «Бренд-менеджер»</h2>
    <span
        >За 6 месяцев научитесь запускать новый бренд с нуля и повышать
        эффективность уже существующего</span
    >
</div>
<div class="banner__center">
    <span>Ближайший старт — 26 марта, 23 апреля и 28 мая</span>
</div>
<div class="banner__bottom">
    <div class="bottom__cards">
        <div class="card__rate">
            <span><svg class="icon icon-objects-16-starfilled" width="19" height="19" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0_2104_9153)"><path d="M7.99987 12.8472L3.80282 15.3998C3.30985 15.6997 2.69969 15.2564 2.83251 14.6949L3.96328 9.91443L0.238594 6.71163C-0.198897 6.33543 0.034162 5.61815 0.609221 5.57096L5.50512 5.16914L7.40018 0.63704C7.62277 0.104711 8.37696 0.104711 8.59955 0.63704L10.4946 5.16914L15.3905 5.57096C15.9656 5.61815 16.1986 6.33543 15.7611 6.71163L12.0365 9.91443L13.1672 14.6949C13.3 15.2564 12.6899 15.6997 12.1969 15.3998L7.99987 12.8472Z" fill="currentColor" fill-opacity="0.85"></path></g><defs><clipPath id="clip0_2104_9153"><rect width="19" height="19" fill="white"></rect></clipPath></defs></svg> 4,5</span>
            <p>на Отзовике, IRecommend и TutorTop</p>
        </div>
        <div class="card__result">
            <div class="card__front">
                <span>10 000</span>
                <p>выпускников нашли работу после обучения</p>
            </div>
            <div class="card__back">
                <img
                    src="https://code.s3.yandex.net/landing-v2/hse-logo.png"
                    alt=""
                />
                <p>по данным <a href="">исследования НИУ ВШЭ</a></p>
            </div>
        </div>
    </div>
    <button class="date__button">Записаться на курс</button>
</div>
        `;

        const banner = document.getElementById("banner");
        banner.style = "";
        banner.innerHTML = newMobileContent;
    }

    const cardResult = document.querySelector(".card__result");
    const cardFront = cardResult.querySelector(".card__front");
    const cardBack = cardResult.querySelector(".card__back");

    cardResult.addEventListener("click", () => {
        cardResult.classList.toggle("flipped");
        cardFront.classList.toggle("flipped");
        cardBack.classList.toggle("flipped");
    });
}

window.addEventListener("resize", replaceContentForMobile);
replaceContentForMobile();
