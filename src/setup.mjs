export function setup({ loadStylesheet }) {
  loadStylesheet('style.css');

  (function () {
    function addClickListeners() {
      const toggleButton = document.querySelector('.btn.btn-block.btn-light.d-flex.justify-content-between.align-items-center.text-combat-smoke.js-class-toggle-enabled');
      const selectAllCategory = document.querySelector('#shop-tab-container > li:nth-child(1) > a');

      if (toggleButton) {
        const listItems = document.querySelectorAll('#shop-tab-container li');

        listItems.forEach((li) => {
          li.onclick = () => {
            toggleButton.click();
          };
        });
      }

      if (selectAllCategory) {
        selectAllCategory.onclick = function () {
          shopMenu.showAllTabsButRaid();
          toggleButton.click();
        };
      }

    }

    const interval = setInterval(() => {
      if (document.querySelector('.btn.btn-block.btn-light.d-flex.justify-content-between.align-items-center.text-combat-smoke.js-class-toggle-enabled') && document.querySelectorAll('#shop-tab-container li').length > 0) {
        clearInterval(interval);
        addClickListeners();
      }
    }, 100);
  })();
};
