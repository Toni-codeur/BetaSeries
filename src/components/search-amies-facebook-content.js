import React from 'react'
import {Link} from 'react-router'
const FontAwesome = require('react-fontawesome');
const SearchAmiesFacebookContent = (props) => {
    const {amie} = props
    return (
        <tr>
           <td><Link to={`film/${props.id}`}>{props.login}</Link></td>
           <td><button className="btn btn-success" onClick={() => addFilm(props.id)}><FontAwesome
        name='plus'
        size='2x'
        style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></button></td>
        </tr>
    )
    function addAmie(serie) {
        props.addAmieCallBack(serie)
    }
}

export default SearchAmiesFacebookContent
