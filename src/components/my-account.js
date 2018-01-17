import React from 'react'
import FontAwesome from 'react-fontawesome'
import {Link, ReactRedirect} from 'react-router'

const MyAccount = () => {
    return (
        <div id="controller">
        <div className="controls">
          <ins className="buttonn red" onClick={() => disconect()} ><span>Disconect</span></ins>
          <ins className="buttonn" onClick={() => link('my-serie')} ><span><Link to={`my-serie`}>Mes Series</Link></span></ins>
          <ins className="buttonn" onClick={() => link('serie')}><span><Link to={`serie`}>Film Vue</Link></span></ins>
          <ins className="buttonn" onClick={() => link('film-list')}><span><Link to={`film-list`}>Liste Film</Link></span></ins>
          <ins className="buttonn" onClick={() => link('series-list')}><span><Link to={`series-list`}>Liste Serie</Link></span></ins>
          <ins className="buttonn" onClick={() => link('amis')}><span><Link to={`amis`}>Mes Amies</Link></span></ins>
        </div>
        <div className="display">
        </div>
      </div>
    )
    function setCookie(nom, valeur, expire, chemin, domaine, securite){
      document.cookie = nom + ' = ' + escape(valeur) + '  ' +
                ((expire == undefined) ? '' : ('; expires = ' + expire.toGMTString())) +
                ((chemin == undefined) ? '' : ('; path = ' + chemin)) +
                ((domaine == undefined) ? '' : ('; domain = ' + domaine)) +
                ((securite == true) ? '; secure' : '');
    }
    function disconect() {
      const dtExpireDel = new Date();
      dtExpireDel.setTime(dtExpireDel.getTime() - 1);
   
       setCookie('tokenUser', '', dtExpireDel, '/');
       document.location.reload(true)
    }
    function link(route) {
      const path = document.location.href + route;
      return document.location.href=path;
      console.log('------------------------------------');
      console.log(path);
      console.log('------------------------------------');
      // return <Redirect to={route}/>;
  }
}

export default MyAccount