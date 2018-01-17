import {AT_SERIES} from '../actions/action-types'

export default function reducerListComment(state = null,action) {
    switch(action.type) {
        case AT_SERIES.GETCOMMENT :
            return action.payload;
    }
    return state;
}