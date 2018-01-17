import {AT_SERIES} from '../actions/action-types'

export default function reducerMyAmies(state = null,action) {
    switch(action.type) {
        case AT_SERIES.MYAMIS :
            return action.payload;
        case AT_SERIES.BLOCKAMIE :
            return action.payload;
        case AT_SERIES.DELETEAMIS :
            return false;
        case AT_SERIES.ADDAMIE :
            return action.payload;
        case AT_SERIES.SEARCHAMIESFACEBOOK :
            return action.payload;
            
    }
    return state;
}