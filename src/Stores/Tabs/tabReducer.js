import * as tabActionTypes from './tabAction';

const INITIAL_STATE = {
    isTradeModalVisibile: false,
}

const tabReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case tabActionTypes.SET_TRADE_MODAL_VISIBILITY:
            return {
                ...state,
                isTradeModalVisibile: action.payload.isVisible
            }
        default:
            return state;
    }
}

export default tabReducer;