// define query selector for css class grid-box;
const gridBox = document.querySelector('.grid-box');

// loop to create 16 x 16 (256) divs
for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.classList.add('box-div');
  gridBox.appendChild(div);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// button code for reset with new grid number 100 or less
const newGridButton = document.querySelector('#new-grid');

newGridButton.addEventListener('click', () => {
  removeAllChildNodes(gridBox);
  let newGridNumber = prompt('Please enter a new grid range (100 or less)');
  if (newGridNumber > 100) {
    newGridNumber = prompt('Please enter a new grid range 100 or less.');
  } else {
    newGridDivs = newGridNumber * newGridNumber;
    console.log(newGridDivs);
    for (let i = 0; i < newGridDivs; i++) {
      const div = document.createElement('div');
      div.classList.add('box-div');
      gridBox.setAttribute('style', `grid-template-columns: repeat(` + newGridNumber + `, 1fr); grid-template-rows: repeat(` + newGridNumber +`, 1fr);`);
      gridBox.appendChild(div);
    }
  }
});

// add event listener for mouse hover to turn box div bkrg. color into black
const boxDivs = document.querySelectorAll(".box-div");

boxDivs.forEach((div) => {
  div.addEventListener('mouseover', () => {
    div.classList.add('black-select');
  });
});
