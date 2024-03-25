function replaceContentForMobile() {
    if(window.innerWidth <= 540) {
        const teachList = document.getElementById('teach-list')
        teachList.classList.remove('swiper-wrapper')
        teachList.classList.add('mobile-swiper-wrapper')
    }
}

window.addEventListener("resize", replaceContentForMobile);
replaceContentForMobile();