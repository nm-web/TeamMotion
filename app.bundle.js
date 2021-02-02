/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

window.onload = function () {
  const animationMenuTab1 = function () {
    let menuItem = document.querySelectorAll('.menu__item'); // let menuVisibleTimeout, menuHideTimeout;
    // if (menuVisibleTimeout) {
    //   clearTimeout(menuVisibleTimeout);
    // }
    // if (menuHideTimeout) {
    //   clearTimeout(menuHideTimeout);
    // }

    menuItem.forEach(item => {
      dataAttr = item.getAttribute('data-hidden');
      let action = gsap.timeline({
        paused: true
      }).to('.menu__item--hidden', {
        duration: 1,
        opacity: '1',
        width: '100%',
        visibility: 'visibility'
      });
      let action1 = gsap.timeline({
        paused: true
      }).to('.menu__item--show', {
        duration: 1,
        opacity: '0',
        width: '0',
        visibility: 'hidden'
      }); // .to('.menu__item--hidden', {duration: 1, opacity: '1', width: '100%',visibility:'visibility'});

      if (dataAttr === 'show') {
        // item.classList.remove('menu-show');
        // item.classList.add('menu-hide');
        action1.play();
      }

      if (dataAttr === 'hidden') {
        // item.classList.remove('menu-hide');
        // item.classList.remove('menu__item--hidden');
        action.play();
      }
    });
  };

  const animationMenuTab2 = function () {
    let menuItem = document.querySelectorAll('.menu__item');
    let menuVisibleTimeout, menuHideTimeout;

    if (menuVisibleTimeout) {
      clearTimeout(menuVisibleTimeout);
    }

    if (menuHideTimeout) {
      clearTimeout(menuHideTimeout);
    }

    menuItem.forEach(item => {
      dataAttr = item.getAttribute('data-hidden');

      if (dataAttr === 'show') {// item.classList.remove('menu-hide');
        // item.classList.add('menu-show');
        // item.classList.remove('menu__item--hidden');
      }

      if (dataAttr === 'hidden') {// item.classList.add('menu-hide');
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
    let menuItem = document.querySelectorAll('.menu__item');
    let dataAttr;
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
    // const accordionTitle = document.querySelectorAll('.accordion__title');
    const accordionItem = document.querySelectorAll('.accordion__item');

    function removeActive() {
      accordionItem.forEach(item => {
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

    accordionItem.forEach(item => {
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
    let action = gsap.timeline({
      paused: true
    }).to('.strip__top', {
      duration: 1,
      height: '100%'
    }).to('.paragraph-line', {
      duration: 0.5,
      backgroundColor: '#00E190'
    }, "-=1");
    line.addEventListener('mouseenter', () => {
      action.play();
    });
    line.addEventListener('mouseleave', () => {
      action.reverse();
    });
  };

  const mouseAnimation = function () {
    gsap.to('.foot', {
      duration: 1,
      translateX: '10px',
      translateY: '-5px',
      repeat: 5,
      yoyo: true
    });
    gsap.to('.foot1', {
      duration: 1,
      translateX: '5px',
      translateY: '-7px',
      repeat: 5,
      yoyo: true
    }, "+=0.2"); // gsap.to('.whell', {duration: 2, rotate: '360deg', transformOrigin: 'center', translate:'5px'});
  }; // mouseAnimation();
  // Аккордеон секции Формат работы


  const formatAccordeon = function () {
    const accordionList = document.querySelector('.list');
    const accordionTitle = document.querySelectorAll('.list__title');
    const accordionContent = document.querySelectorAll('.list__content');
    accordionList.addEventListener('click', () => {
      accordionTitle.forEach(title => {
        title.classList.toggle('list__title--active');
      });
      accordionContent.forEach(content => {
        content.classList.toggle('list__content--active');
      });
    });
  }; // Слайдер Отзывы


  let galleryThumbs = new Swiper('.reviews__slider-pagination', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
  });
  let galleryTop = new Swiper('.reviews__slider', {
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 'auto',
    autoHeight: true,
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev'
    },
    pagination: {
      clickable: true
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
  sandwichToggle();
  tabs();
  animimationMission();
  lineAnimationSectionStrenght();
  servicesAccordionAnimated();
  formatAccordeon();
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map