const gridContainer = document.querySelector('#grid-container');

// 16 x 16 grid, so 256 divs
for (let i = 0; i < 256; i++) {
  const gridDiv = document.createElement('div');
  gridDiv.classList.add('grid-border');
  gridContainer.appendChild(gridDiv);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}


function newEtchCheck(newEtch) {
  newEtch = prompt("What do you want the size of the new grid? (max 100)");
  if (newEtch > 100) {
    newEtch = prompt("Please enter a size of the grid below 100.")
  } else if (newEtch <= 100) {
    newEtch = newEtch * newEtch;
    return newEtch;
  }
}

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  gridDivHover.forEach((div) => {
    div.classList.remove('black');
  });
  removeAllChildNodes(gridContainer);
  let newEtch = newEtchCheck();
  for (let i = 0; i < newEtch; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid-border');
    gridContainer.appendChild(gridDiv);
  }
  gridDivHover.forEach((div) => {
      div.addEventListener('mouseover', () => {
      div.classList.add('black');
    });
  });
});

const gridDivHover = document.querySelectorAll('.grid-border');

gridDivHover.forEach((div) => {
    div.addEventListener('mouseover', () => {
    div.classList.add('black');
  });
});
