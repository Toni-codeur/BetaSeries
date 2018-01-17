import { combineReducers } from 'redux';
import ReducerLogin from './reducer-login'
import ReducerMyAmies from './reducer-amis'
import ReducerActiveFilm from './reducer-active-film'
import ReducerActiveSerie from './reducer-active-serie'
import ReducerListComment from './reducer-comment'
import ReducerDetailEpisodeSerie from './reducer-detail-episode-serie'
import {reducer as ReducerForm} from 'redux-form'

const rootReducer = combineReducers({
  series : ReducerLogin,
  detailEpisodeSerie : ReducerDetailEpisodeSerie,
  activeFilm : ReducerActiveFilm,
  activeSerie : ReducerActiveSerie,
  amies : ReducerMyAmies,
  comment : ReducerListComment,
  form : ReducerForm
});

export default rootReducer;
