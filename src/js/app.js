window.onload = function () {


  const tabs = function () {
    // let tabItem1 = document.querySelector('.tabs-item1');
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
      if (tab2VisibleTimeout){
        clearTimeout(tab2VisibleTimeout);
      }
      tab2VisibleTimeout = setTimeout(() => {
        tab2Content.classList.remove('tab2-visible');
      }, 2000);

      menuItem.forEach((item) => {
        dataAttr = item.getAttribute('data-hidden');
        if (dataAttr === 'show') {
          item.classList.remove('menu-show');
          item.classList.add('menu-hide');
          item.classList.add('menu__item--hidden');
        }
        if (dataAttr === 'hidden') {
          item.classList.remove('menu-hide');
          item.classList.add('menu-show');
          item.classList.remove('menu__item--hidden');
        }
      });

    }

    function selectTabItem2(e) {
      e.stopPropagation();
      if (tab2VisibleTimeout){
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



      menuItem.forEach((item) => {
        dataAttr = item.getAttribute('data-hidden');
        if (dataAttr === 'show') {
          item.classList.remove('menu-hide');
          item.classList.remove('menu__item--hidden');
          item.classList.add('menu-show');
        }
        if (dataAttr === 'hidden') {
          item.classList.remove('menu-show');
          item.classList.add('menu-hide');
          item.classList.add('menu__item--hidden');
        }
      });
    }
  };
  tabs();
  const sandwichToggle = function () {
    let sandwichElements = document.querySelector('.mobile-menu');
    let menu = document.querySelector('.menu');
    sandwichElements.addEventListener('click', showSandwichTarget);

    function showSandwichTarget() {
      this.classList.toggle('is-active');
      menu.classList.toggle('active');
    }
  };
  sandwichToggle();


};
