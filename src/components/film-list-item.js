import React from 'react'
import {Link} from 'react-router'
const FilmListItem = (props) => {
    const {serie} = props
    return (
        <tr>
           <td><Link to={`film/${props.id}`}>{props.title}</Link></td>
           <td><button className="btn btn-success" onClick={() => addFilm(props.id)}>Ajouter comme Vu</button></td>
        </tr>
    )
    function addFilm(serie) {
        props.addFilmCallBack(serie)
    }
}

export default FilmListItem