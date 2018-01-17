import {AT_SERIES} from '../actions/action-types'

export default function reducerActiveFilm(state = null,action) {
    switch(action.type) {
        case AT_SERIES.DETAILFILM :
            return action.payload;
    }
    return state;
}