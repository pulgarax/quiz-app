export const bookmark = document.querySelector('[data-js="bookmark1"]');
const bookmark2 = document.querySelector('[data-js="bookmark2"]');

bookmark1.addEventListener('click', () => {
    bookmark1.classList.toggle('bookmark-marked');
});