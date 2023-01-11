//** === === Javascript Portfolio With Tailwind CSS === ===  */
//**TODO === === Events === ===  */

const updateList = () => {
  const titles = [...document.querySelectorAll(`h1, h2`)].sort((a, b) => {
    return (
      Math.abs(a.getBoundingClientRect().top) -
      Math.abs(b.getBoundingClientRect().top)
    );
  });

  document.querySelectorAll(`.selected-circle`).forEach((element) => {
    element.classList.remove(`.selected-circle`);
  });

  document
    .querySelectorAll(`.nav-dot`)
    [[...document.querySelectorAll(`h1, h2`)].indexOf(titles[0])].classList.add(
      `.selected-circle`
    );
};

updateList();

window.addEventListener(`scroll`, () => {
  updateList();
});
