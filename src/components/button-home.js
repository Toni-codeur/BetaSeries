import React from 'react'
import {Link} from 'react-router'
const FontAwesome = require('react-fontawesome');
const ButtonHome = () => {
    return (
        <Link to={'/'} className="button button-circle button-primary"><FontAwesome  className='super-crazy-colors'
        name='home'
        size='2x'
        style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></Link>
    )
}

export default ButtonHome