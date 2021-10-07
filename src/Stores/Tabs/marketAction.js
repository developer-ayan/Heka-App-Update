import axios from "axios";

export const GET_HOLDING_BEGIN = 'GET_HOLDING_BEGIN';
export const GET_HOLDING_SUCCESS = 'GET_HOLDING_SUCCESS';
export const GET_HOLDING_FAILURE = 'GET_HOLDING_FAILURE';

export const GET_COIN_MARKET_BEGIN = 'GET_COIN_MARKET_BEGIN'
export const GET_COIN_MARKET_SUCCESS = 'GET_COIN_MARKET_SUCCESS'
export const GET_COIN_MARKET_FAILURE = 'GET_COIN_MARKET_FAILURE'

export const getHoldingsBegin = () => ({
    type: GET_HOLDING_BEGIN
})

export const getHoldingsSuccess = (myHoldings) => ({
    type: GET_HOLDING_SUCCESS,
    payload: { myHoldings }
})

export const getHoldingsFailure = (error) => ({
    type: GET_HOLDING_FAILURE,
    payload: { error }
})

export function getHoldings(holdings = [], currency = 'usd',
    orderBy = 'market_cap_disc', sparkline = true, priceChangePerc = '7d',
    perPage = 10, page = 1) {


    return async dispatch => {
        dispatch(getHoldingsBegin())

        let ids = holdings.map((item) => { return item.id }).join(", ")

        let apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}&ids=${ids}`

        try {
            const response = await axios({
                url: apiUrl,
                method: 'GET',
                header: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (response.status == 200) {
                let myHoldings = response.data.map((item) => {

                    let coin = holdings.find(a => a.id == item.id);

                    let price7d = item.current_price / (1 + item.
                        price_change_percentage_7d_in_currency * 0.01);

                        // Idher show horha data

                    console.log(item.fully_diluted_valuation)

                    return {

                        id: item.id,
                        symbol: item.symbol,
                        name: item.name,
                        image: item.image,
                        current_price: item.current_price,
                        qty: item.qty,
                        total: coin.qty * item.current_price,
                        price_change_percentage_7d_in_currency: item.price_change_percentage_7d_in_currency,
                        holding_value_change_7d: (item.current_price - price7d) * coin.qty,
                        sparkline_in_7d: {
                            value: item.sparkline_in_7d.price.map(
                                (price) => {
                                    return price * coin.qty
                                }
                            )
                        }

                    }

                })



            } else {
                dispatch(getHoldingsFailure(response.data));
            }
        } catch (error_1) {
            dispatch(getHoldingsFailure(error_1));
        }


    }

}

// return dispatch => {
//     dispatch(getHoldingsBegin())

//     let ids = holdings.map((item) => { return item.id }).join(", ")

//     let apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}&ids=${ids}`


//     return axios({
//         url: apiUrl,
//         method: 'GET',
//         header: {
//             Accept: "Application/json"
//         }
//     }).then((response) => {
//         if (response.state == 200) {

//             let myHoldings = response.data.map((item) => {


//                 let coin = holdings.find(a => a.id == item.id)


//                 let price7d = item.current_price / (1 + item.
//                     price_change_percentage_7d_in_currency * 0.01)

//                 return {

//                     id: item.id,
//                     symbol: item.symbol,
//                     name: item.name,
//                     image: item.image,
//                     current_price: item.current_price,
//                     qty: item.qty,
//                     total: coin.qty * item.current_price,
//                     price_change_percentage_7d_in_currency: item.price_change_percentage_7d_in_currency,
//                     holding_value_change_7d: (item.current_price - price7d) * coin.qty,
//                     sparkline_in_7d: {
//                         value: item.sparkline_in_7d.price.map(
//                             (price) => {
//                                 return price * coin.qty
//                             }
//                         )
//                     }

//                 }
//             })

//             dispatch(getHoldingsSuccess(myHoldings))
//             // console.log(myHolding)

//         }
//         else {
//             dispatch(getHoldingsFailure(response.data))
//             // console.log(response.data)
//         }
//     }).catch((error) => {
//         dispatch(getHoldingsFailure(error))
//         console.log('Error :(')
//     })
// }



// export const getCoinMarketBegin = () => ({
//     type: GET_COIN_MARKET_BEGIN
// })

// export const getCoinMarketSuccess = (coins) => ({
//     type: GET_COIN_MARKET_SUCCESS,
//     payload: { coins }
// })

// export const getCoinMarketFailure = (error) => ({
//     type: GET_COIN_MARKET_FAILURE,
//     payload: { error }

// })

// export function getCoinMarket(currency = 'usd',
//     orderBy = 'market_cap_disc', sparkline = true, priceChangePerc = '7d',
//     perPage = 10, page = 1) {

//     return dispatch => {

//         dispatch(getCoinMarketBegin())
//         let apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}`


//         return axios({
//             url: apiUrl,
//             method: 'GET',
//             header: {
//                 Accept: "Application/json"
//             }
//         }).then((response) => {
//             if (response.state) {
//                 dispatch(getCoinMarketSuccess(response.data))
//                 // console.log(response.data)
//             }
//             else {
//                 dispatch(getCoinMarketFailure(response.data))
//                 console.log(response.data)
//                 // alert('hello world')
//             }
//         }).catch((error) => {
//             console.log('kya yaar phir error')
//             dispatch(getCoinMarketFailure(error))
//         })

//     }

// }
