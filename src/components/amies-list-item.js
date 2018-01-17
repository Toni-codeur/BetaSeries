import React from 'react'
import {Link} from 'react-router'
const FontAwesome = require('react-fontawesome');
const AmiesListItem = (props) => {
    console.log('------------------------------------');
    console.log('props', props);
    console.log('------------------------------------');
    const {amie} = props
    return (
        <tr>
           <td><Link to={`amis/${amie.id}`}>{amie.login}</Link></td>
           <td>{amie.xp}</td>
           <td>
               <button className="btn btn-danger" onClick={() => deleteAmie(amie.id)}><FontAwesome  className='super-crazy-colors'
        name='trash'
        size='2x'
        style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></button>
               <button className="btn btn-warning" onClick={() => blockAmie(amie.id)}><FontAwesome  className='super-crazy-colors'
        name='ban circle'
        size='2x'
        style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></button>
            </td>
        </tr>
    )
    function deleteAmie(amie) {
         props.deleteAmieCallBack(amie)
    } 
    function blockAmie(amie) {
        props.blockAmieCallBack(amie)
   }  
}

export default AmiesListItem