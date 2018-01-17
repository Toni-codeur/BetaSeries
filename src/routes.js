import React, { Component } from 'react'
import {Router,Route,browserHistory,IndexRoute} from 'react-router'
import SerieList from './containers/serie-list'
import MySerieList from './containers/my-serie-list'
import SeriesList from './containers/series-list'
import FilmList from './containers/film-list'
import NotFound from './components/not-found'
import LoginForm from './containers/login-form'
import SearchAmiesFacebookList from './containers/search-amies-facebook-list'
import DetailFilm from './containers/detail-film'
import DetailSerie from './containers/detail-serie'
import DetailEpisodeParSaison from './containers/detail-episode-par-saison'
import DetailEpisodeParIdEpisode from './containers/detail-episode-par-id-episode'
import MyAccount from './components/my-account'
import MyAmiesList from './containers/my-amies-list'

function  getCookie(name){
  if(document.cookie.length == 0)
    return null;

  var regSepCookie = new RegExp('(; )', 'g');
  var cookies = document.cookie.split(regSepCookie);

  for(var i = 0; i < cookies.length; i++){
    var regInfo = new RegExp('=', 'g');
    var infos = cookies[i].split(regInfo);
    if(infos[0] == name){
      return unescape(infos[1]);
    }
  }
  return null;
}

class Routes extends Component {
  render() {
    const TOKEN = getCookie('tokenUser');
    if(TOKEN != null) {
      return (
        <div>
            <Router history={browserHistory}>
              <Route path="/my-serie" component={MySerieList} />
              <Route path="/amis" component={MyAmiesList} />
              <Route path="/search-amies-facebook" component={SearchAmiesFacebookList} />
              <Route path="/serie" component={SerieList} />
              <Route path="/series-list" component={SeriesList} />
              <Route path="/film-list" component={FilmList} />
              <Route path="/login" component={LoginForm} />
              <Route path="film/:id" component={DetailFilm} />
              <Route path="serie/:id" component={DetailSerie} />
              <Route path="serie/:id/:saison" component={DetailEpisodeParSaison} />
              <Route path="serie/:id/:saison/:episode" component={DetailEpisodeParIdEpisode} />
              <Route path="/" component={MyAccount} />
              <Route path="*" component={NotFound} />
            </Router>
        </div>
      )
    } else {
      return (
        <div>
            <Router history={browserHistory}>
              <Route path="/my-serie" component={MySerieList} />
              <Route path="/serie" component={SerieList} />
              <Route path="/series-list" component={SeriesList} />
              <Route path="/film-list" component={FilmList} />
              <Route path="/login" component={LoginForm} />
              <Route path="film/:id" component={DetailFilm} />
              <Route path="serie/:id" component={DetailSerie} />
              <Route path="serie/:id/:saison" component={DetailEpisodeParSaison} />
              <Route path="serie/:id/:saison/:episode" component={DetailEpisodeParIdEpisode} />
              <Route path="/" component={LoginForm} />
              <Route path="*" component={NotFound} />
            </Router>
        </div>
      )
    }
  }
}

export default Routes