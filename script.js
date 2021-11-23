// define query selector for css class grid-box
const gridBox = document.querySelector(".grid-box-16");

// loop to create 16 x 16 (256) divs
for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.classList.add('box-div');
  gridBox.appendChild(div);
}

// add event listener for mouse hover to turn box div bkrg. color into black
const boxDivs = document.querySelectorAll(".box-div");

boxDivs.forEach((div) => {
  div.addEventListener('mouseover', () => {
    div.classList.add('black-select');
  });
});
