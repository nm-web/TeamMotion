window.onload = function () {

  const tabs = function () {
    let tabItem1 = document.querySelector('.tabs-item1');
    let tabContent1 = document.querySelector('.tabs-content1');
    let tabItem2 = document.querySelector('.tabs-item2');
    let tabContent2 = document.querySelector('.tabs-content2');
    let tab2 = document.querySelector('.tabs2');
    tabItem2.addEventListener('click', selectTabItem2);
    tabItem1.addEventListener('click', selectTabItem1);
    let menuItem = document.querySelectorAll('.menu__item');

    let dataAttr;
    function selectTabItem1() {
      tabContent1.classList.add('active');
      tabItem1.classList.remove('active');
      tab2.classList.remove('active');
      tabContent2.classList.remove('active');

      menuItem.forEach((item) => {
        dataAttr = item.getAttribute('data-hidden');
        if (dataAttr === 'show') {
          item.classList.add('menu__item--hidden');
        }
        if (dataAttr === 'hidden') {
          item.classList.remove('menu__item--hidden');
        }
      });

    }

    function selectTabItem2() {
      console.log(tabContent1);
      tab2.classList.add('active');
      tabContent1.classList.remove('active');
      tabContent1.classList.add('kostil');

      tabItem1.classList.remove('active');
      tabContent1.classList.add('active-1');
      tabItem2.classList.add('active');
      tabContent2.classList.add('active');
      menuItem.forEach((item) => {
        dataAttr = item.getAttribute('data-hidden');
        if (dataAttr === 'show') {
          item.classList.remove('menu__item--hidden');
        }
        if (dataAttr === 'hidden') {
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

  setTimeout(() => {

  })

};
