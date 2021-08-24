let movies = [];
function Movie(name, category, release) {
  this.name = name;
  this.category = category;
  this.release = release;
  movies.push(this);
}

let form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);
function handleSubmit(e) {
  e.preventDefault();
  let name = e.target.name.value;
  let category = e.target.category.value;
  let release = e.target.release.value;
  let newMovie = new Movie(name, category, release);
  newMovie.renderBody();
  createStorage();
}

function createStorage() {
  localStorage.setItem('movies', JSON.stringify(movies));
}
function getStorage() {
  let data = localStorage.getItem('movies');
  data = JSON.parse(data);
  if (data !== null) {
    for (let i = 0; i < data.length; i++) {
      new Movie(data[i].name, data[i].category, data[i].release);
    }
  }
}
getStorage();

let table = document.getElementById('table');
Movie.prototype.renderBody = function () {
  let tr = document.createElement('tr');
  table.appendChild(tr);

  let btnDelete = document.createElement('btn');
  tr.appendChild(btnDelete);
  btnDelete.innerText = 'X';
  btnDelete.addEventListener('click', deleteMovie);
  function deleteMovie() {
    alert('assume that movie deleted :P');
  }

  let img = document.createElement('img');
  let td1 = document.createElement('td');
  switch (this.category) {
  case 'action': img.src = 'img/action.png'; break;
  case 'adventure': img.src = 'img/adventure.png'; break;
  case 'animation': img.src = 'img/animation.png'; break;
  case 'comedy': img.src = 'img/comedy.png'; break;
  case 'detective': img.src = 'img/detective.png'; break;
  case 'fantasy': img.src = 'img/fantasy.png'; break;
  case 'history': img.src = 'img/history.png'; break;
  case 'horror': img.src = 'img/horror.png'; break;
  case 'musical': img.src = 'img/musical.png'; break;
  case 'pirate': img.src = 'img/pirate.png'; break;
  case 'romantic': img.src = 'img/romantic.png'; break;
  case 'sci-fi': img.src = 'img/sci-fi.png'; break;
  case 'war': img.src = 'img/war.png'; break;
  case 'western': img.src = 'img/western.png'; break;
  }
  td1.appendChild(img);
  tr.appendChild(td1);

  let td2 = document.createElement('td');
  td2.innerText = this.name;
  tr.appendChild(td2);

  let td3 = document.createElement('td');
  td3.innerText = this.category;
  tr.appendChild(td3);

  let td4 = document.createElement('td');
  td4.innerText = this.release;
  tr.appendChild(td4);
};
movies.forEach(movie => {
  movie.renderBody();
});

let btnClear = document.getElementById('btn-clear');
btnClear.addEventListener('click', clearList);
function clearList(e) {
  e.preventDefault();
  localStorage.clear();
  location.reload();
}
