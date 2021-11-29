// define query selector for css class grid-box;
const gridBox = document.querySelector('.grid-box');

// button code for reset with new grid number 100 or less
const newGridButton = document.querySelector('#new-grid');

// function for loop to create 16 x 16 (256) divs
function sixteenLoop() {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('box-div');
    gridBox.appendChild(div);
  }
}

sixteenLoop();

/* random color / random code start */

// credit: https://webdesign.tutsplus.com/tutorials/generate-random-background-colors-javascript--cms-37030

const getRandomNumber = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
};

const getRandomColor = () => {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  const l = getRandomNumber(100);

  return `hsl(${h}deg, ${s}%, ${l}%)`;
}

// add event listener for mouse hover to turn box div bkrg. color into black
const boxDivs = document.querySelectorAll(".box-div");

blackSelectListener();
randomColorSelectListener();

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function blackSelectListener() {
  const boxDivs = document.querySelectorAll(".box-div");
  boxDivs.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.classList.add('black-select');
    });
  });
}

function randomColorSelectListener() {
  const boxDivs = document.querySelectorAll(".box-div");
  const randomColor = getRandomColor();
  boxDivs.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = randomColor;
    });
  });
}

newGridButton.addEventListener('click', () => {
  removeAllChildNodes(gridBox);
  let newGridNumber = prompt('Please enter a new grid range (100 or less)');
  if (newGridNumber > 100) {
    newGridNumber = prompt('Please enter a new grid range 100 or less.');
  } else {
    newGridDivs = newGridNumber * newGridNumber;
    for (let i = 0; i < newGridDivs; i++) {
      const div = document.createElement('div');
      div.classList.add('box-div');
      gridBox.setAttribute('style', `grid-template-columns: repeat(` + newGridNumber + `, 1fr); grid-template-rows: repeat(` + newGridNumber +`, 1fr);`);
      gridBox.appendChild(div);
    }
  }
  blackSelectListener();
  randomColorSelectListener();
});
