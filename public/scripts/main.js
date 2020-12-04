// import BirthChart from './BirthChart.js';
import BirthChartList from './BirthChartList.js';

// Modals

const modalElem = document.querySelector('.modal');
const modalContentArea = modalElem.querySelector('.modal-content')
const options = {};
const modalInstance = M.Modal.init(modalElem, options);


// Create application instance

const birthChartList1 = new BirthChartList();
console.log('birthChartList1', birthChartList1);

const listNode = document.getElementById('birthchart-list-container');
console.log('listNode', listNode);
birthChartList1.render(listNode, (mount, players) => {
  if(!players.length) {
    listNode.innerHTML = '<p>No players yet...</p>'
    return;
  }
  console.log('players', players);
  const list = document.createElement('ol');
  list.id="birthchart-list";
  list.classList.add("list-group", "birthchart-list");
  for(const {name, value=7, img} of players) {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = `
      <h2>${name}</h2>
      <progress max="12" value="${value}"></progress>`;
      const btn = document.createElement('button');
      btn.textContent = 'View Chart';
      btn.addEventListener('click', (e) => {
        modalContentArea.innerHTML = img;
        modalInstance.open();
      });
      li.append(btn);
      list.append(li);
  }
  mount.append(list);
});

