const gridContainer = document.querySelector('#grid-container');


for (let i = 0; i < 16; i++) {
  const gridDiv = document.createElement('div');
  gridDiv.classList.add('grid-border');
  gridContainer.appendChild(gridDiv);
}

const gridDivHover = document.querySelectorAll('.grid-border');
gridDivHover.forEach((div) => {
    div.addEventListener('mouseover', () => {
    div.classList.toggle('black');
  });
});
