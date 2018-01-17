import React from 'react'
import {Link} from 'react-router'
const FontAwesome = require('react-fontawesome');

const MySeriesListItem = (props) => {
    console.log('------------------------------------');
    console.log(props.serie);
    console.log('------------------------------------');
    const {serie} = props
    return (
        <tr>
           <td><Link to={`serie/${props.id}`}>{props.title}</Link></td>
           <td><button className="btn btn-danger btn-xs" onClick={() => deleteMySerie(props.id)}><FontAwesome
        name='trash'
        size='2x'
        style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></button></td>
        </tr>
    )
    function deleteMySerie(serie) {
        props.deleteFilm(serie)
    }
}

export default MySeriesListItem