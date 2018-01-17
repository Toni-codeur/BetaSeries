import React from 'react'
import {Link} from 'react-router'
import { addSerie } from '../actions/index';
const FontAwesome = require('react-fontawesome');
const SeriesListItem = (props) => {
    const {serie} = props
    return (
        <tr>
           <td><Link to={`serie/${props.id}`}>{serie.title}</Link></td>
           <td><button className="btn btn-warning" onClick={() => addSerie(serie.id)}><FontAwesome  className='super-crazy-colors'
        name='star'
        size='2x'
        style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></button></td>
        </tr>
    )
    function addSerie(serie) {
        props.addSeriesCallBack(serie)
    }
}

export default SeriesListItem