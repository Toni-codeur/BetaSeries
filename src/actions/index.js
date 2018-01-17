import axios from 'axios'
import {AT_SERIES} from './action-types'
import md5 from 'md5'
const END_POINT = "https://api.betaseries.com/"
const API_KEY = "key="
const NBR_FILM = "limit=30"

function setCookie(nom, valeur, expire, chemin, domaine, securite){
    document.cookie = nom + ' = ' + escape(valeur) + '  ' +
              ((expire == undefined) ? '' : ('; expires = ' + expire.toGMTString())) +
              ((chemin == undefined) ? '' : ('; path = ' + chemin)) +
              ((domaine == undefined) ? '' : ('; domain = ' + domaine)) +
              ((securite == true) ? '; secure' : '');
}
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


let TOKEN = "";

export function loginUser(post) {
    var dtExpire = new Date();
    dtExpire.setTime(dtExpire.getTime() + 3600 * 1000);

    const login = post['login']
    const password = md5(post['password'])
    
    return function (dispatch) {
        axios.post(`${END_POINT}members/auth?${API_KEY}`, {
            login :  login,
            password : password
        }).then((response) => {
            let TOKEN = getCookie('tokenUser');
            document.location.reload(true)
            console.log('------------------------------------');
            console.log(TOKEN);
            console.log('------------------------------------');
            setCookie('tokenUser', response.data['token'], dtExpire, '/' );
             dispatch({type : AT_SERIES.LOGIN, payload : response.data})
        })
        .catch((error) => {
            dispatch({type:AT_SERIES.ERROR,payload:error.data})
        },
           {headers : { ' Content-Type ' :  ' application / x-www-form-urlencoded ' }}
        )
    }
}

export function readAllSeriesFromUser() {
    let TOKEN = getCookie('tokenUser');
    if (TOKEN !== null) {
        return function (dispatch) {
            console.log('------------------------------------');
            console.log(TOKEN);
            console.log('------------------------------------');
            axios.get(`${END_POINT}members/infos?${API_KEY}&token=${TOKEN}`).then((response) => {
                dispatch({type : AT_SERIES.SERIEUSER, payload : response.data.member.movies})
            }).catch( (error) =>{
            dispatch({type:AT_SERIES.ERROR,payload:error.data})
            });
        }
    }
}
export function readAllFilmFromUser() {
    let TOKEN = getCookie('tokenUser');
    console.log('------------------------------------');
    console.log(TOKEN);
    console.log('------------------------------------');
    if (TOKEN !== null) {
        return function (dispatch) {
            axios.get(`${END_POINT}shows/member?${API_KEY}&token=${TOKEN}`).then((response) => {
                dispatch({type : AT_SERIES.FILMUSER, payload : response.data.shows})
            }).catch( (error) =>{
            dispatch({type:AT_SERIES.ERROR,payload:error.data})
            });
        }
    }
}

export function deleteSerie(id) {
    let TOKEN = getCookie('tokenUser');
    console.log('------------------------------------');
    console.log(TOKEN);
    console.log('------------------------------------');
    if (TOKEN !== null) {
        return function (dispatch) {
            axios.delete(`${END_POINT}movies/movie?${API_KEY}&id=${id}&token=${TOKEN}`).then((response) => {
                dispatch({type:AT_SERIES.DELETE, payload : id})
            });
        }
    }
}

export function deleteFilm(idSerie) {
    let TOKEN = getCookie('tokenUser');
    console.log('------------------------------------');
    console.log(TOKEN);
    console.log('------------------------------------');
    if (TOKEN !== null) {
        return function (dispatch) {
            axios.delete(`${END_POINT}shows/favorite?${API_KEY}&id=${id}&token=${TOKEN}`).then((response) => {
                dispatch({type:AT_SERIES.DELETESERIE, payload : id})
            });
        }
    }
}

export function listFilm() {
    return function (dispatch) {
        axios.get(`${END_POINT}movies/list?${API_KEY}&${NBR_FILM}&order=popularity`).then((response) => {
            dispatch({type : AT_SERIES.LISTFILM, payload : response.data.movies})
        }).catch( (error) =>{
            dispatch({type:AT_SERIES.ERROR,payload:error.data})
        });
    }
}

export function listSerie() {
    return function (dispatch) {
        axios.get(`${END_POINT}shows/discover?${API_KEY}&${NBR_FILM}`).then((response) => {
            dispatch({type : AT_SERIES.LISTSERIE, payload : response.data.shows})
        }).catch( (error) =>{
            dispatch({type:AT_SERIES.ERROR,payload:error.data})
        });
    }
}

export function addFilm(idFilm) {
    let TOKEN = getCookie('tokenUser');
    console.log('------------------------------------');
    console.log(TOKEN);
    console.log('------------------------------------');
    if (TOKEN !== null) {
        return function (dispatch) {
            axios.post(`${END_POINT}movies/movie?${API_KEY}&id=${idFilm}&mail=0&twitter=0&state=1&token=${TOKEN}`, {
                id :  idFilm,
                mail : '0',
                twitter : '0',
                state : '1',
                Token : '7c13e75f4d01'
            }).then((response) => {
                console.log('------------------------------------');
                console.log(reponse);
                console.log('------------------------------------');
                dispatch({type : AT_SERIES.ADDFILM, payload : id})
            });
        }
    }
}

export function addSerie(idSerie) {
    let TOKEN = getCookie('tokenUser');
    console.log('------------------------------------');
    console.log(TOKEN);
    console.log('------------------------------------');
    if (TOKEN !== null) {
        return function (dispatch) {
            axios.post(`${END_POINT}shows/favorite?${API_KEY}&id=${idSerie}&token=${TOKEN}`, {
                id :  idSerie,
                Token : '7c13e75f4d01'
            }).then((response) => {
                console.log('------------------------------------');
                console.log(reponse);
                console.log('------------------------------------');
                dispatch({type : AT_SERIES.ADDSERIE, payload : id})
            });
        }
    }
}


export function detailFilm(idFilm) {
    return function (dispatch) {
        axios.get(`${END_POINT}movies/movie?${API_KEY}&id=${idFilm}`).then((response) => {
            dispatch({type : AT_SERIES.DETAILFILM, payload : response.data.movie})
        }).catch( (error) =>{
            dispatch({type:AT_SERIES.ERROR,payload:error.data})
        });
    }
}
export function detailSerie(idSerie) {
    return function (dispatch) {
        axios.get(`${END_POINT}shows/display?${API_KEY}&id=${idSerie}`).then((response) => {
            dispatch({type : AT_SERIES.DETAILSERIE, payload : response.data.show})
        }).catch( (error) =>{
            dispatch({type:AT_SERIES.ERROR,payload:error.data})
        });
    }
}           
export function detailEpisodeParIdSerie(idSerie,nbrSaison) {
    return function (dispatch) {
        axios.get(`${END_POINT}shows/episodes?${API_KEY}&id=${idSerie}&season=${nbrSaison}`).then((response) => {
            dispatch({type : AT_SERIES.DETAILEPISODEPARIDSERIE, payload : response.data.episodes})
        }).catch( (error) =>{
            dispatch({type:AT_SERIES.ERROR,payload:error.data})
        });
    }
}
export function detailEpisodeParIdEpisode(idEpisode) {
    return function (dispatch) {
        axios.get(`${END_POINT}episodes/display?${API_KEY}&id=${idEpisode}`).then((response) => {
            dispatch({type : AT_SERIES.DETAILEPISODEPARIDEPISODE, payload : response.data})
        }).catch( (error) =>{
            dispatch({type:AT_SERIES.ERROR,payload:error.data})
        });
        // axios.get(`${END_POINT}pictures/episodes?${API_KEY}&id=${idEpisode}`).then((response) => {
        //     dispatch({type : AT_SERIES.DETAILEPISODEPARIDEPISODE, payload : response.data})
        // }).catch( (error) =>{
        //     dispatch({type:AT_SERIES.ERROR,payload:error.data})
        // });
    }
}

export function addEpisodeVu(idEpisode) {
    console.log('------------------------------------');
    console.log(idEpisode);
    console.log('------------------------------------');
    let TOKEN = getCookie('tokenUser');
    console.log('------------------------------------');
    console.log(TOKEN);
    console.log('------------------------------------');
    if (TOKEN !== null) {
        return function (dispatch) {
            axios.post(`${END_POINT}episodes/watched?${API_KEY}&id=${idEpisode}&token=${TOKEN}`, {
                id :  idEpisode,
                Token : TOKEN
            }).then((response) => {
                console.log('------------------------------------');
                console.log(reponse);
                console.log('------------------------------------');
                dispatch({type : AT_SERIES.MARQUEEPISODEVU, payload : id})
            });
        }
    }
}

export function enleveEpisodeCommeVu(idEpisode) {
    let TOKEN = getCookie('tokenUser');
    console.log('------------------------------------');
    console.log(TOKEN);
    console.log('------------------------------------');
    if (TOKEN !== null) {
        return function (dispatch) {
            axios.delete(`${END_POINT}episodes/watched?${API_KEY}&id=${idEpisode}&token=${TOKEN}`).then((response) => {
                dispatch({type:AT_SERIES.DELETEEPISODEVU, payload : id})
            });
        }
    }
}
export function listAmis() {
    let TOKEN = getCookie('tokenUser');
    if (TOKEN !== null) {
        return function (dispatch) {
            axios.get(`https://api.betaseries.com/friends/list?v=3.0&${API_KEY}&token=${TOKEN}`).then((response) => {
                dispatch({type : AT_SERIES.MYAMIS, payload : response.data.users})
            }).catch( (error) =>{
                dispatch({type:AT_SERIES.ERROR,payload:error.data})
            });
        }
    }
}

export function commentEpisode(contentForm) {
    let TOKEN = getCookie('tokenUser');
    if (TOKEN !== null) {
        return function (dispatch) {
            axios.post(`${END_POINT}comments/comment?${API_KEY}&type=episode&id=${contentForm.id}&text=${contentForm.text}&token=${TOKEN}`, {
                type :  'episode',
                id : contentForm.id,
                text : contentForm.text,
                Token : TOKEN
            }).then((response) => {
                console.log('------------------------------------');
                console.log(reponse);
                console.log('------------------------------------');
                dispatch({type : AT_SERIES.COMMENTEPIDOSE, payload : id})
            });
        }
    }
}
export function listComment(idEpisode) {
    let TOKEN = getCookie('tokenUser');
    if (TOKEN !== null) {
        return function (dispatch) {
            axios.get(`https://api.betaseries.com/comments/comments?type=episode&id=${idEpisode}&nbpp=20&order=desc&v=3.0&${API_KEY}`).then((response) => {
                dispatch({type : AT_SERIES.GETCOMMENT, payload : response.data.comments})
            }).catch( (error) =>{
                dispatch({type:AT_SERIES.ERROR,payload:error.data})
            });
        }
    }
}
export function deleteAmie(id) {
    let TOKEN = getCookie('tokenUser');
    console.log('------------------------------------');
    console.log('token', TOKEN);
    console.log('------------------------------------');
    if (TOKEN !== null) {
        return function (dispatch) {
            axios.delete(`${END_POINT}friends/friend?${API_KEY}&id=${id}&token=${TOKEN}`).then((response) => {
                dispatch({type:AT_SERIES.DELETEAMIS, payload : id})
            });
        }
    }
}

export function blockAmie(idUser) {
    let TOKEN = getCookie('tokenUser');
    if (TOKEN !== null) {
        return function (dispatch) {
            axios.post(`${END_POINT}friends/block?${API_KEY}&id=${idUser}&token=${TOKEN}`, {
                id : idUser,
                Token : TOKEN
            }).then((response) => {
                console.log('------------------------------------');
                console.log(reponse);
                console.log('------------------------------------');
                dispatch({type : AT_SERIES.BLOCKAMIE, payload : id})
            });
        }
    }
}

export function searchAmiesFacebook() {
    let TOKEN = getCookie('tokenUser');
    if (TOKEN !== null) {
        return function (dispatch) {
            axios.get(`${END_POINT}friends/find?v=3.0?type=facebook&${API_KEY}&token=${TOKEN}`).then((response) => {
                dispatch({type : AT_SERIES.SEARCHAMIESFACEBOOK, payload : response.data.users})
            }).catch( (error) =>{
                dispatch({type:AT_SERIES.ERROR,payload:error.data})
            });
        }
    }
}
export function addAmie(idUser) {
    let TOKEN = getCookie('tokenUser');
    if (TOKEN !== null) {
        return function (dispatch) {
            axios.post(`${END_POINT}friends/friend?${API_KEY}id=${idUser}&token=${TOKEN}`, {
                id : idUser,
                Token : TOKEN
            }).then((response) => {
                dispatch({type : AT_SERIES.ADDAMIE, payload : id})
            });
        }
    }
}
