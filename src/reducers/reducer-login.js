import {AT_SERIES} from '../actions/action-types'

export default function reducerLogin(state =[],action) {
    
    switch(action.type) {
        case AT_SERIES.LOGIN :
            return action.payload;
        case AT_SERIES.LISTFILM :
            return action.payload;
        case AT_SERIES.LISTSERIE :
            return action.payload;
        case AT_SERIES.SERIEUSER :
            return action.payload;
        case AT_SERIES.FILMUSER :
            return action.payload;
        case AT_SERIES.DELETE :
            return false;
        case AT_SERIES.DELETESERIE :
            return false;
        case AT_SERIES.ADDFILM :
            return action.payload;
        case AT_SERIES.ADDSERIE :
            return action.payload;
    }
    return state;
}