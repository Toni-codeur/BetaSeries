import React from 'react'
const minute = (seconde) => {
  return Math.floor(seconde / 60);
}
const nbrSaison = (data) => {
    return data.map((nbrEpisode, index) => <a href={`${window.location.href}/${nbrEpisode.number}`} key={index}><li key={index}>{nbrEpisode.episodes} Episodes</li></a>)
}
const DetailSerieContent = ({serieContent}) => {
  return (
    <div>
      <div className="row">
      <img src={serieContent.images.show} className="img-fluid img-circle"/>
      <br/><br/><br/>
      <h2 className="title">{serieContent.title}</h2>
          <h3 className="genres">{serieContent.genres}</h3>
          <p className="note">{serieContent.notes.mean.toFixed(2)} / 5</p>
         <div className="col-md-4">
            <img src={serieContent.images.poster} className="poster"/>
            <h4 className="minute">Saisons : {serieContent.seasons}</h4>
            <h4 className="minute">Nbr episodes: {serieContent.episodes}</h4>
            <h4 className="minute">Durée : {serieContent.length} Minutes</h4>
          </div>
          <div className="col-md-8">
          <h4>Description : </h4>
            <p className="synopsis">{serieContent.description}</p>
          </div>
          <h4>Details Saisons : </h4>
            <ol>
                {nbrSaison(serieContent.seasons_details)}
            </ol> 
        </div>
    </div>
  )
}

export default DetailSerieContent