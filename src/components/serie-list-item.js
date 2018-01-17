import React from 'react'
import {Link} from 'react-router'
const FontAwesome = require('react-fontawesome');
const SerieListItem = (props) => {
    const {serie} = props
    console.log('------------------------------------');
    console.log(props.id);
    console.log('------------------------------------');
    return (
        <tr>
           <td><Link to={`film/${props.id}`}>{props.title}</Link></td>
           <td><button className="btn btn-danger" onClick={() => deleteSerie(props.id)}><FontAwesome
        name='trash'
        size='2x'
        style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></button></td>
        </tr>
    )
    function deleteSerie(serie) {
        props.deleteSerieCallBack(serie)
    }
}

export default SerieListItem