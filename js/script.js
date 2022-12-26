// все работает только после того, как страница будет загружена //
document.addEventListener('DOMContentLoaded', () => { 

    // при прокрутки вниз будет появляться полоса в меню навигации //
    // при прокрутки вверх до упора эта полоса будет исчезать //
    let navMenu = document.getElementById("header");
    let video = document.querySelector(".video-play");
    video.pause(); // останавливаем сразу

    window.addEventListener("scroll", (e) => {
        // меню навигации //
        if (window.scrollY >= 100) {
            navMenu.style.backgroundColor = "rgba(48, 40, 39, 0.6)";
        }
        else {
            navMenu.style.backgroundColor = "rgba(48, 40, 39, 0)";
        }

        // автовоспроизведение видео //
        if (window.scrollY >= 200 && window.scrollY <= 1200) {
            video.play();
        }
        else {
            video.pause();
        }
    });

    // когда видео заканчивается, оно перематывается вначало //
    video.addEventListener("ended", (e) => {
        video.currentTime = 0;
        video.play();
    });
    
    // новинки в меню //
    // переключатель слайдера //
    let tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
    
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', function(event) {
        const target = event.target;
        if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
    
    //авто-слайдер//
    let num = 0;
    let timerId = setInterval(() => {
        hideTabContent();
        showTabContent(num);
        num++;
        if (num == 4) {
            num = 0;
        }
    }, 5000);

    //console.log(window.screen.width);
    // фикс размеров элементов под 125% масштаб //
    /*if (window.screen.width < 1920) {
        let Sidepanel = document.querySelector('.sidepanel');
        Sidepanel.style.left = 20 + "px";
        Sidepanel.style.top = 150 + "px";
        let previewLife = document.querySelector('.preview__life');
        previewLife.style.marginLeft = 130 + "px";
        //let justifyContentStart = document.querySelector('.justify-content-start');
        //justifyContentStart.style.height = 800 + "px";
        let loveOrCoffee = document.querySelector('.love_or_coffee');
        loveOrCoffee.style.marginLeft = 80 + "%";
        loveOrCoffee.style.width = 400 + "px";
        loveOrCoffee.style.height = 220 + "px";
    }*/
});