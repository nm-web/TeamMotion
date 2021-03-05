
window.onload = function () {
  const animationMenuTab1 = function () {
    let menuItem = document.querySelectorAll('.menu__item');
    menuItem.forEach((item) => {
      dataAttr = item.getAttribute('data-hidden');
      let action = gsap.timeline({paused:true})
        .to('.menu__item--hidden', {duration: 1, opacity: '0', width: '0',visibility:'hidden', marginLeft: '0'})
        .to('.menu__item--hidden', {duration: 0.8, display: 'none'});
      let action1 = gsap.timeline({paused:true})
        .to('.menu__item--show', {duration: 1, display: 'block'})
        .to('.menu__item--show', {duration: 1, opacity: '1', width: 'auto',visibility:'visible'})

      if (dataAttr === 'show') {
        action1.play();
      }
      if (dataAttr === 'hidden') {
        action.play();
      }
    });
  };

  const animationMenuTab2 = function () {
    let menuItem = document.querySelectorAll('.menu__item');
    let action = gsap.timeline({paused:true})
      .to('.menu__item--show', {duration: 1, opacity: '0', width: '0',visibility:'hidden', marginLeft: '0'})
      .to('.menu__item--show', {duration: 0.8, display: 'none'});
    let action1 = gsap.timeline({paused:true})
      .to('.menu__item--hidden', {duration: 1, display: 'block'})
      .to('.menu__item--hidden', {duration: 1, opacity: '1', width: 'auto',visibility:'visible'});
    menuItem.forEach((item) => {
      dataAttr = item.getAttribute('data-hidden');
      if (dataAttr === 'show') {
        action1.play();
      }
      if (dataAttr === 'hidden') {
        action.play();
      }
    });
  };

  const tabs = function () {
    let tabItem1 = document.querySelector('.tabs-item1-list');
    let tab1Content = document.querySelector('.tab1-content');
    let tab2Content = document.querySelector('.tab2-content');
    let tab1header = document.querySelector('.tabs-item1');
    let tab2header = document.querySelector('.tabs-item2');
    tab2header.addEventListener('click', selectTabItem2);
    tab1header.addEventListener('click', selectTabItem1);
    let tab2VisibleTimeout;

    function selectTabItem1(e) {
      e.stopPropagation();
      tabItem1.classList.remove('anim-switch-tabs-up');
      tab1Content.classList.remove('anim-fade-out');
      tab2header.classList.remove('active');
      tab1header.classList.add('active');

      if (!tabItem1.classList.contains('anim-switch-tabs-down')) {
        tabItem1.classList.add('anim-switch-tabs-down');
      }
      if (!tab1Content.classList.contains('anim-fade-in')) {
        tab1Content.classList.add('anim-fade-in');
      }
      if (tab2VisibleTimeout) {
        clearTimeout(tab2VisibleTimeout);
      }
      tab2VisibleTimeout = setTimeout(() => {
        tab2Content.classList.remove('tab2-visible');
      }, 2000);

      animationMenuTab1();
    }

    function selectTabItem2(e) {
      e.stopPropagation();
      if (tab2VisibleTimeout) {
        clearTimeout(tab2VisibleTimeout);
      }
      tabItem1.classList.remove('anim-switch-tabs-down');
      tab1Content.classList.remove('anim-fade-in');
      tab2Content.classList.add('tab2-visible');
      if (!tabItem1.classList.contains('anim-switch-tabs-up')) {
        tabItem1.classList.add('anim-switch-tabs-up');
      }
      if (!tab1Content.classList.contains('anim-fade-out')) {
        tab1Content.classList.add('anim-fade-out');
      }
      tab1header.classList.remove('active');
      tab2header.classList.add('active');

      animationMenuTab2();
    }
  };

  const sandwichToggle = function () {
    let sandwichElements = document.querySelector('.mobile-menu');
    let menu = document.querySelector('.menu');
    sandwichElements.addEventListener('click', showSandwichTarget);

    function showSandwichTarget() {
      this.classList.toggle('is-active');
      menu.classList.toggle('active');
    }
  };

  const animimationMission = function () {
    let animEl1 = document.querySelector('#up');
    let animEl2 = document.querySelector('#down');
    let animEl3 = document.querySelector('#hidden');
    let hoverEl = document.querySelector('.mission__content');

    function animationElements() {
      animEl1.classList.add('up-move');
      animEl2.classList.add('down-move1');
      animEl3.classList.add('hidden-hover');
      setTimeout(() => {
        animEl1.classList.remove('up-move');
        animEl2.classList.remove('down-move1');
        animEl3.classList.remove('hidden-hover');
      }, 600);
    }

    hoverEl.addEventListener('mouseenter', () => {
      animationElements();

    });
    hoverEl.addEventListener('mouseleave', () => {
      animationElements();
    });

  };

  const servicesAccordionAnimated = function () {
    const accordionItem = document.querySelectorAll('.accordion__item');

    function removeActive() {
      accordionItem.forEach((item) => {
        if (item.classList.contains('active')) {
          item.classList.remove('active');
          const animeItem = item.querySelector('.accordion__content');
          anime({
            targets: animeItem,
            'max-height': ['240px', '0'],
            translateY: '30px',
            opacity: ['1', '0'],
            duration: 1500,
            easing: 'easeInOutQuad'
          });

        }

      });
    }

    function animeImage(animeCircleId) {
      const circle1 = document.querySelector('#circle1');
      const circle2 = document.querySelector('#circle2');
      const circle3 = document.querySelector('#circle3');
      const circle4 = document.querySelector('#circle4');
      const circle5 = document.querySelector('#circle5');
      let top, left, target;

    }

    accordionItem.forEach((item) => {
      item.addEventListener('click', () => {
        removeActive();
        const animeItem = item.querySelector('.accordion__content');
        const animeCircleId = item.getAttribute('data-circle');
        const animeCircle = document.querySelector(animeCircleId);
        const circles = document.querySelectorAll('.services__circle');
        if (!item.classList.contains('active')) {
          anime({
            targets: animeItem,
            'max-height': ['0', '240px'],
            opacity: ['0', '1'],
            duration: 2000,
            translateY: '0',
            easing: 'easeInOutQuad'
          });
          item.classList.add('active');
        }

        animeImage(animeCircleId);

      });
    });

  };

  const lineAnimationSectionStrenght = function () {
    const line = document.querySelector('.strip');
    let action = gsap.timeline({paused:true})
      .to('.strip__top',{duration: 1, height: '100%'})
      .to('.paragraph-line',{duration: 0.5, backgroundColor: '#00E190'}, "-=1");
    line.addEventListener('mouseenter',() => {
      action.play();
    });
    line.addEventListener('mouseleave',() => {
      action.reverse();
    });
  }


  // Аккордеон секции Формат работы
  const formatAccordeon = function () {
    const accordionList = document.querySelector('.list');
    const accordionTitle = document.querySelectorAll('.list__title');
    const accordionContent = document.querySelectorAll('.list__content');
    accordionList.addEventListener('click', () => {
      accordionTitle.forEach((title) => {
          title.classList.toggle('list__title--active');
        });
      accordionContent.forEach((content) => {
        content.classList.toggle('list__content--active');
      });

      })

  }

  // Слайдер Отзывы
  let galleryThumbs = new Swiper('.reviews__slider-pagination', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  let galleryTop = new Swiper('.reviews__slider', {
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 'auto',
    autoHeight: true,
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
    pagination: {
      clickable: true,
    },
    thumbs: {
      swiper: galleryThumbs
    },

  });

  sandwichToggle();
  tabs();
  animimationMission();
  lineAnimationSectionStrenght();
  servicesAccordionAnimated();
  formatAccordeon();

};
