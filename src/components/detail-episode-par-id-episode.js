import React from 'react'
import {Link} from 'react-router'
const minute = (seconde) => {
  return Math.floor(seconde / 60);
}
const episode = (data) => {
    return data.map((nbrEpisode, index) => (
        <a href={`${window.location.href}/${nbrEpisode.id}`} key={index}><li key={index}>{nbrEpisode.title}</li></a>)
    )
}
const nbrEpisode = (data) => {
    return data.length
}
const saison = (saison) => {
    return saison.shift().season
}

const DetailEpisodeParIdEpisodeContent = ({episodeContent,serieContent}) => {
  return (
    <div>
        <div className="row">
        <img src={serieContent.images.show} className="img-fluid img-circle"/>
            <h1 className="title">{serieContent.title}</h1>
            <h2 className="title">Titre : {episodeContent.episode.title}</h2>
            <h3 className="title">Saison : {episodeContent.episode.season} Episode : {episodeContent.episode.episode}</h3>
            <h4>Description : </h4>
            <p className="title"> {episodeContent.episode.description}</p>
        </div>
    </div>
 )
}

export default DetailEpisodeParIdEpisodeContent