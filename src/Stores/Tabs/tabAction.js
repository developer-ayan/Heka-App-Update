export const SET_TRADE_MODAL_VISIBILITY = 'SET_TRADE_MODAL_VISIBILITY';

export const setTradeModalVisibiltySuccess = (isVisible) => ({
     type : SET_TRADE_MODAL_VISIBILITY,
     payload : {isVisible}
})

export function setTradeModalVisibilty(isVisible){
    return dispatch => {
dispatch(setTradeModalVisibiltySuccess(isVisible))
    }
}