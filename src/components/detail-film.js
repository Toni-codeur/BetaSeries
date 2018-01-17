import React from 'react'

const minute = (seconde) => {
  return Math.floor(seconde / 60);
}
const DetailFilmContent = ({filmContent}) => {
  console.log('------------------------------------');
  console.log(filmContent);
  console.log('------------------------------------');
  return (
    <div>
      <div className="row">
      <img src={filmContent.backdrop} className="img-fluid img-circle"/>
      <h2 className="title">{filmContent.title}</h2>
          <h3 className="genres">{filmContent.genres}</h3>
          <p className="note">{filmContent.notes.mean.toFixed(2)} / 5</p>
         <div className="col-md-4">
            <h4 className="minute">Durée : {minute(filmContent.length)} Minutes</h4>
            <img src={filmContent.poster} className="poster"/>
          </div>
          <div className="col-md-8">
          <h4>Synopsis : </h4>
            <p className="synopsis">{filmContent.synopsis}</p>
          </div>
        </div>
    </div>
  )
}

export default DetailFilmContent