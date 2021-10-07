import * as marketActions from './marketAction'
import {
    GET_HOLDING_BEGIN,
    GET_HOLDING_SUCCESS,
    GET_HOLDINGS_FAILURE
} from './marketAction'

const initial_state = {
    myHoldings: [],
    coins: [],
    error: null,
    loading: false
}

function marketReducer(state = initial_state, action) {
    switch (action.type) {
        case marketActions.GET_HOLDINGS_BEGIN:
            return {
                ...state,
                loading: true
            }
        case marketActions.GET_HOLDING_SUCCESS:
            return {
                ...state,
                myHoldings: action.payload.myHoldings
            }
        case marketActions.GET_HOLDINGS_FAILURE:
            return {
                ...state,
                error: action.payload.error
            }

        // case marketActions.GET_COIN_MARKET_BEGIN:
        //     return {
        //         ...state,
        //         loading: true
        //     }

        // case marketActions.GET_COIN_MARKET_SUCCESS:
        //     return {
        //         ...state,
        //         coins: action.payload.coins
        //     }

        // case marketActions.GET_COIN_MARKET_FAILURE:
        //     return {
        //         ...state,
        //         error: action.payload.error
        //     }

        //     return {
        //         ...state,
        //         loading: true
        //     }

        default:
            return state
    }
}

export default marketReducer;