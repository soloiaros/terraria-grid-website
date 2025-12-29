const header = document.querySelector('header')

const targetRowActivateBG = 9;
const targetRowDeactivateBG = 34;

const triggerCellActivateBG = document.querySelector(`.cell[data-col='1'][data-row='${targetRowActivateBG}']`);
const triggerCellDectivateBG = document.querySelector(`.cell[data-col='1'][data-row='${targetRowDeactivateBG}']`);

window.addEventListener('scroll', () => {
  let triggerOffsetActivateBG = triggerCellActivateBG.offsetTop;
  let triggerOffsetDectivateBG = triggerCellDectivateBG.offsetTop;
  if (window.scrollY > triggerOffsetActivateBG && window.scrollY < triggerOffsetDectivateBG) {
    header.classList.add('background')
  } else {
    header.classList.remove('background')
  }
})

// window.addEventListener('scroll', (e) => {
//   console.log(window.scrollY);
//   if (window.scrollY > window.innerHeight) {
//     header.classList.add('background')
//   } else {
//     header.classList.remove('background')
//   }
// })