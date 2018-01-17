import {AT_SERIES} from '../actions/action-types'

export default function reducerDetailEpisodeSerie(state = null,action) {
    switch(action.type) {
        case AT_SERIES.DETAILEPISODEPARIDSERIE :
            return action.payload;
        case AT_SERIES.DETAILEPISODEPARIDEPISODE :
            return action.payload;
        case AT_SERIES.MARQUEEPISODEVU :
            return action.payload;
        case AT_SERIES.DELETEEPISODEVU :
            return false;
    }
    return state;
}