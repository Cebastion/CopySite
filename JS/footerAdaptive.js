function replaceContentForMobile() {
    if (window.innerWidth <= 1025){
        const MobileHTML = 
    `
    <div class="footer__info">
    <div class="footer__phone">
        <a href="tel:8-800-700-93-29">8-800-700-93-29</a>
        <span>Звонок по России бесплатный</span>
    </div>
    <div class="footer__social">
        <a href="https://vk.com/yandex.practicum">
            <svg
                class="icon icon-social-vk"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.725 18.933h1.318s.396-.048.599-.29c.193-.227.193-.646.193-.646s-.029-1.973.796-2.263c.813-.288 1.844 1.905 2.944 2.748.84.644 1.47.506 1.47.506l2.944-.046s1.542-.107.813-1.46c-.056-.107-.413-.998-2.173-2.826-1.845-1.906-1.597-1.599.62-4.902 1.346-2.013 1.897-3.242 1.718-3.765-.152-.491-1.155-.37-1.155-.37l-3.302.032s-.247-.031-.426.092c-.179.122-.288.4-.288.4s-.524 1.567-1.224 2.889c-1.488 2.794-2.08 2.948-2.313 2.764-.554-.4-.412-1.618-.412-2.49 0-2.705.37-3.841-.716-4.133-.357-.093-.624-.154-1.544-.17-1.183-.014-2.18.01-2.746.319-.37.207-.66.667-.494.69.22.032.714.15.976.55.343.519.329 1.676.329 1.676s.193 3.191-.453 3.587c-.454.269-1.059-.286-2.379-2.822-.674-1.29-1.183-2.734-1.183-2.734s-.097-.262-.274-.416c-.208-.169-.511-.23-.511-.23l-3.149.03s-.467.017-.631.246c-.153.2-.015.63-.015.63s2.462 6.438 5.254 9.68c2.558 2.972 5.46 2.78 5.46 2.78l-.046-.056z"
                    fill="currentColor"
                ></path>
            </svg>
        </a>
        <a href="https://thecode.media/">Журнал</a>
        <a href="https://practicum.yandex.ru/blog">Блог</a>
        <a href="https://practicum.yandex.ru/promo/lms-practicum/"
            >LMS Практикум</a
        >
    </div>
    <div class="footer__colounm">
        <div class="footer__about mobile-footer__about">
            <h3>О нас</h3>
            <a href="https://yandex.ru/legal/practicum_termsofuse/"
                >Правовая информация</a
            >
            <a href="https://practicum.yandex.ru/reviews/">Отзывы</a>
            <a href="https://yandex.ru/support/practicum/">Справка</a>
            <a href="https://code.s3.yandex.net/License%20YSDA.pdf">Лицензия</a>
            <a href="mailto:media@praktikum.yandex.ru">Для СМИ</a>
            <a href="https://practicum.yandex.ru/jobreport"
                >Результаты трудоустройства выпускников</a
            >
            <a href="https://practicum.yandex.ru/career-center/"
                >Карьерный центр</a
            >
            <a href="https://yandex.ru/edtech"
                >Сайт образовательной организации</a
            >
            <a href="https://yandex.ru/edtech/documents"
                >Сведения об образовательной организации</a
            >
            <a href="https://yandex.ru/legal/recommendations/#index__practicum"
                >Правила рекомендаций</a
            >
            <a
                href="https://code.s3.yandex.net/pravila-akcii-mart-15-2024-rf.pdf"
                >Правила акции «Скидка 15% на курсы с нуля»</a
            >
        </div>
        <div class="footer__colounm-2">
            <div class="footer__command">
                <h3>Стать частью команды</h3>
                <a href="https://practicum.yandex.ru/job"
                    >Частичная занятость: авторы, наставники, ревьюеры</a
                >
                <a href="https://practicum.yandex.ru/hr/"
                    >Полная занятость в основной команде</a
                >
            </div>
            <div class="footer__partner">
                <h3>Партнёрам</h3>
                <a href="https://practicum.yandex.ru/b2b/"
                    >Корпоративным клиентам</a
                >
                <a href="https://practicum.yandex.ru/employment/"
                    >Предложить стажировку или вакансию выпускникам</a
                >
            </div>
        </div>
    </div>
    <div class="footer__text">
        <span
            >Образовательные услуги оказываются АНО ДПО «Образовательные
            технологии Яндекса» на основании
            <a href="https://code.s3.yandex.net/License%20YSDA.pdf"
                >Лицензии № Л035-01298-77/00185314</a
            >
            от 24 марта 2015 года.</span
        >
        <span
            >Документ о прохождении обучения по программе дополнительного
            профессионального образования также выдаётся АНО ДПО
            «Образовательные технологии Яндекса».</span
        >
        <span>Проект компании <a href="https://yandex.ru/all">Яндекс</a></span>
        <span
            >© 2024 АНО ДПО «Образовательные технологии Яндекса», ООО «Яндекс»,
            119021, Москва, ул. Льва Толстого, 16</span
        >
    </div>
</div>
    `

    const footer = document.getElementById('footer');

    footer.innerHTML = MobileHTML;
    }
}

window.addEventListener("resize", replaceContentForMobile);
replaceContentForMobile();