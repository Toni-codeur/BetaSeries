import React from 'react'
import {Link} from 'react-router'
const ListComment = (props) => {    
    return (
        <li>
            <div className="commenterImage">
                <img src={props.comment.avatar} />
            </div>
            <div className="commentText">
                <p className="">{props.text}</p> <span className="date sub-text">{props.comment.date}</span>
            </div>
        </li>
    )
}

export default ListComment