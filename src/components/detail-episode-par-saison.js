import React from 'react'
const episode = (data,add) => {
    console.log('------------------------------------');
    console.log('test', data);
    console.log('------------------------------------');
    return data.map((nbrEpisode, index) => (
        <a href={`${window.location.href}/${nbrEpisode.id}`} key={index}><li key={index}>{nbrEpisode.title}
                <button className="btn btn-primary btn-xs" onClick={() => addEpisodeVu(nbrEpisode.id, add)}>Ajouter comme vu</button>
            </li></a>
        )
    )
}           //<a href={`${window.location.href}/${nbrEpisode.id}`} key={index}>
function addEpisodeVu(episodeContent, add) {
    add(episodeContent)
}
const nbrEpisode = (data) => {
    return data.length
}
const saison = (saison) => {
    return saison.shift().season
}
const DetailEpisodeParSaisonContent = (props) => {
    const {episodeContent} = props
    const {serieContent} = props
    const {addEpisodeVuCallBack} = props
    console.log('------------------------------------');
    console.log(props);
    console.log('------------------------------------');
  return (
    <div>
      <div className="row">
      <img src={serieContent.images.show} className="img-fluid img-circle"/>
      <h2 className="title">{serieContent.title}</h2>
         <div className="col-md-4">
            <h4 className="minute">Nbr episodes: {nbrEpisode(episodeContent)}</h4>
            <h4 className="minute">Durée : {serieContent.length} Minutes</h4>
            <img src={serieContent.images.poster} className="poster"/>
          </div>
          <div className="col-md-8">
          <h4>Details Saisons : {saison(episodeContent)} </h4>
            <ol>
             {episode(episodeContent, addEpisodeVuCallBack)}
            </ol> 
          </div>
        </div>
    </div>
 )
}

export default DetailEpisodeParSaisonContent