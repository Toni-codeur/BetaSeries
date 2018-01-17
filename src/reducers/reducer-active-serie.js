import {AT_SERIES} from '../actions/action-types'

export default function reducerActiveSerie(state = null,action) {
    switch(action.type) {
        case AT_SERIES.DETAILSERIE :
            return action.payload;
    }
    return state;
}