const gridContainer = document.querySelector('#flex-grid');

// 16 x 16 grid, so 256 divs
for (let i = 0; i < 256; i++) {
  const gridDiv = document.createElement('div');
  gridDiv.classList.add('grid-item');
  gridContainer.appendChild(gridDiv);
}

const gridDivHover = document.querySelectorAll('.grid-item');

gridDivHover.forEach((div) => {
    div.addEventListener('mouseover', () => {
    div.classList.add('black');
  });
});

/*
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
*/
/*
function newEtchCheck(newEtch) {
  newEtch = prompt("What do you want the size of the new grid? (max 100)");
  if (newEtch > 100) {
    newEtch = prompt("Please enter a size of the grid below 100.")
  } else if (newEtch <= 100) {
    newEtch = newEtch * newEtch;
    return newEtch;
  }
}
*/

const btn = document.querySelector('button');

/*
btn.addEventListener('click', () => {
  gridDivHover.forEach((div) => {
    div.classList.remove('black');
  });
  removeAllChildNodes(gridContainer);
  for (let i = 0; i < newEtchCheck(); i++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid-item');
    gridContainer.appendChild(gridDiv);
  }
});
*/
