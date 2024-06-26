const reviewsBlock = document.querySelector(".reviews__block");

reviewsBlock.addEventListener("click", () => {
    const BlockHTML = 
    `
    <div class="blur"></div>
<div class="review__row__navigation__block">
    <button class="review__prev">
    <svg class="icon icon-prev review-card__modal-nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M10.414 12L15 16.586A1 1 0 0113.586 18l-6-6 6-6A1 1 0 1115 7.414L10.414 12z" fill="currentColor"></path></svg>
    </button>
    <div class="review__block">
        <button class="review__close" id="review__close">
            <svg
                class="icon icon-close"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M13.414 12L18 16.586A1 1 0 0116.586 18l-5.39-5.39a.862.862 0 010-1.22L16.585 6A1 1 0 1118 7.414L13.414 12z"
                    fill="currentColor"
                ></path>
                <path
                    d="M10.879 12l-4.586 4.586A1 1 0 107.707 18l5.39-5.39a.862.862 0 000-1.22L7.707 6a1 1 0 00-1.414 1.414L10.879 12z"
                    fill="currentColor"
                ></path>
            </svg>
        </button>
        <div class="block__content">
            <div class="reviews__preson">
                <img
                    src="https://code.s3.yandex.net/landings-v2-brand-management/reviews/aelina_barmina.jpg"
                    alt=""
                    class="reviews__img"
                />
                <div class="reviews__info">
                    <span>Аэлина Бармина</span>
                    <p>Выпускница 3 потока</p>
                </div>
            </div>
            <div class="reviews__text">
                <p>
                    Привет! Меня зовут Аэлина и до недавнего времени я была
                    проект-менеджером в небольшом брендинговом агентстве на базе
                    медиакомпании. Однако, наша команда распалась по разным личным
                    причинам моих коллег. В этот момент я точно для себя решила, что
                    хочу возобновить работу агентства, но уже не в лице
                    проект-менеджера. Я хочу сама анализировать поведение и мотивы
                    аудитории, изучать тренды рынка, выдвигать позиционирующие идеи,
                    разрабатывать стратегии развития и продвижения бренда. Я хочу
                    попробовать себя в роли бренд-менеджера.
                </p>
                <p>
                    Привет! Меня зовут Аэлина и до недавнего времени я была
                    проект-менеджером в небольшом брендинговом агентстве на базе
                    медиакомпании. Однако, наша команда распалась по разным личным
                    причинам моих коллег. В этот момент я точно для себя решила, что
                    хочу возобновить работу агентства, но уже не в лице
                    проект-менеджера. Я хочу сама анализировать поведение и мотивы
                    аудитории, изучать тренды рынка, выдвигать позиционирующие идеи,
                    разрабатывать стратегии развития и продвижения бренда. Я хочу
                    попробовать себя в роли бренд-менеджера.
                </p>
                <p>
                    Привет! Меня зовут Аэлина и до недавнего времени я была
                    проект-менеджером в небольшом брендинговом агентстве на базе
                    медиакомпании. Однако, наша команда распалась по разным личным
                    причинам моих коллег. В этот момент я точно для себя решила, что
                    хочу возобновить работу агентства, но уже не в лице
                    проект-менеджера. Я хочу сама анализировать поведение и мотивы
                    аудитории, изучать тренды рынка, выдвигать позиционирующие идеи,
                    разрабатывать стратегии развития и продвижения бренда. Я хочу
                    попробовать себя в роли бренд-менеджера.
                </p>
                <p>
                    Привет! Меня зовут Аэлина и до недавнего времени я была
                    проект-менеджером в небольшом брендинговом агентстве на базе
                    медиакомпании. Однако, наша команда распалась по разным личным
                    причинам моих коллег. В этот момент я точно для себя решила, что
                    хочу возобновить работу агентства, но уже не в лице
                    проект-менеджера. Я хочу сама анализировать поведение и мотивы
                    аудитории, изучать тренды рынка, выдвигать позиционирующие идеи,
                    разрабатывать стратегии развития и продвижения бренда. Я хочу
                    попробовать себя в роли бренд-менеджера.
                </p>
                <p>
                    Выбрать обучение именно в Яндексе мне предложил мой босс и я ему
                    очень благодарна! Сам учебный процесс протекает на платформе, в
                    которой ты можешь как изучить теорию, так и выполнять
                    упражнения. Вот какие плюсы и минусы самой платформы я отмечу:
                </p>
                <p>
                    + сам курс разделен на тематические блоки, благодаря чему
                    понятно, на каком этапе обучения находишься и сколько осталось
                    обучаться (даже есть процент пройденного обучения)
                </p>
                <p>
                    + каждый спринт (это примерно двухнедельное обучение) четко
                    структурирован на темы и уроки, легко найти текущий урок, на
                    котором остановился
                </p>
                <p>
                    Вот так я вижу тренажер! :) Нравится ли он мне? Определенно да!
                    Видно, что над ним работала целая команда, потому что учтены не
                    только технические части, но и факторы поведения человека.
                </p>
            </div>
            <div class="line-review__close">
                <button class="mobile-review__close" id="mobile-review__close" style="display: none">
                    <svg
                        class="icon icon-close"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M13.414 12L18 16.586A1 1 0 0116.586 18l-5.39-5.39a.862.862 0 010-1.22L16.585 6A1 1 0 1118 7.414L13.414 12z"
                            fill="currentColor"
                        ></path>
                        <path
                            d="M10.879 12l-4.586 4.586A1 1 0 107.707 18l5.39-5.39a.862.862 0 000-1.22L7.707 6a1 1 0 00-1.414 1.414L10.879 12z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <button class="review__next">
    <svg class="icon icon-prev review-card__modal-nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M10.414 12L15 16.586A1 1 0 0113.586 18l-6-6 6-6A1 1 0 1115 7.414L10.414 12z" fill="currentColor"></path></svg>
    </button>
</div>
    `


    document.body.insertAdjacentHTML('beforeend', BlockHTML)


    const closeBlock = document.querySelector('.review__close')
    const closeBlockMobile = document.querySelector('.mobile-review__close')
    closeBlock.addEventListener('click', () => {
        const reviewRowNavigationBlock = document.querySelector('.review__row__navigation__block');
        const blur = document.querySelector('.blur');
        reviewRowNavigationBlock.remove();
        blur.remove()
    });
    closeBlockMobile.addEventListener('click', () => {
        const reviewRowNavigationBlock = document.querySelector('.review__row__navigation__block');
        const blur = document.querySelector('.blur');
        reviewRowNavigationBlock.remove();
        blur.remove()
    });
})