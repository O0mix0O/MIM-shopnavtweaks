export function setup({ loadStylesheet }) {
  loadStylesheet('style.css');

  (function () {
    function addClickListeners() {
      const toggleButton = document.querySelector('.btn.btn-block.btn-light.d-flex.justify-content-between.align-items-center.text-combat-smoke.js-class-toggle-enabled');

      if (toggleButton) {
        const listItems = document.querySelectorAll('#shop-tab-container li');

        listItems.forEach((li) => {
          li.onclick = () => {
            toggleButton.click();
          };
        });
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
