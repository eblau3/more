
const more = (element) => {
  const button = element.querySelector('.js-more-button');
  const list = element.querySelector('.js-more-list');
  const items = list.querySelectorAll('.js-more-item');
  const initialCount = element.dataset.initialCount || 6 ;
  const eachCount = element.dataset.eachCount || 6;
  const activeClass = 'is-show';

  const showItem = (el) => el && el.classList.add(activeClass);
  const removeButton = () => button.disabled = true;

  for(let i = 0; i < initialCount; i++) {
    showItem(items[i]);
  };
  if((items.length - initialCount) <= 0) button.style.display = 'none';

  button.addEventListener('click', () => {
    const hideItems = list.querySelectorAll(`.js-more-item:not(.${activeClass})`);
    for(let i = 0; i < eachCount; i++) {
      showItem(hideItems[i]);
    };
    if((hideItems.length - eachCount) <= 0) button.disabled = true;
  });
};

window.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('.js-more');
  target && more(target);
});