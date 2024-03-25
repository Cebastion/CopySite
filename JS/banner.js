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
            <span>4,5</span>
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