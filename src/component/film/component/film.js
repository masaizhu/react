class FilmItem {
  constructor(item, id) {
    this.id = id;
    this.image = item.image || './images/m.jpg';
    this.name = item.name || '无名';
    this.director = item.director || '未知';
    this.star = item.star || 0;
    this.liked = item.liked || false;
    this.detail = item.detail || '暂无介绍';
  }
}

export default class Film {
  constructor(app) {
    this.app = app;
  }
  getFilms(id) {
    let films = localStorage.films;
    if (films) {
      this.setFilms(JSON.parse(films), id);
    } else {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', '/films.json', true);
      xhr.send();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          films = xhr.responseText;
          localStorage.films = films;
          this.setFilms(JSON.parse(films), id);
        }
      }
    }
  }
  setFilms(films, id) {
    let newFilms = films;
    let count = this.app.state.count;
    const path = this.app.props.location.pathname;
    if (path === '/home') {
      newFilms = films.filter((ele, i) => {
        return i > (films.length - 5);
      });
      newFilms = newFilms.reverse();
    }
    else if (path === '/like') {
      newFilms = films.filter((ele, i) => {
        return ele.liked === true;
      });
    }
    if (id !== undefined && id !== '') {
      newFilms = films.filter((ele, i) => {
        return ele.id == id;
      });
    }
    this.app.setState({
      films: newFilms
    });
    if (count !== undefined) {
      newFilms.forEach(function(ele,i){
        if(ele.liked === true) {
          count += 1;
        }
      });
      this.app.setState({
        count: count
      });
    }
  }

  addFilm(e) {
    e.preventDefault();
    let films = JSON.parse(localStorage.films),
        newFilm = new FilmItem(this.app.state, (films[films.length-1].id + 1));
    films.push(newFilm);
    console.log("films", films);
    this.app.setState({
      name: '',
      director: ''
    });
    this.setFilms(films);
    localStorage.films = JSON.stringify(films);
  }
  handleLike(e) {
    e.preventDefault();
    let filmId = this.app.state.films[0].id;
    let films = JSON.parse(localStorage.films);
    let filmIndex = films.findIndex(function(ele, i){
      return ele.id == filmId;
    });
    films[filmIndex].liked = !films[filmIndex].liked;
    this.setFilms(films, filmId);
    localStorage.films = JSON.stringify(films);
  }
}