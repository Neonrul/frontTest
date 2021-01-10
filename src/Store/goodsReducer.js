import products from './../Assets/Object/products.json'

let initialState = {goods:[]}

const GET_GOODS = 'GET_GOODS',
 goodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GOODS:
            return {
                ...state,
                goods: action.goods
            }
        default:
            return state
    }
}

export const getGoods = (goods) => ({type:GET_GOODS, goods}),

    getGoodsFromJson = () => (dispatch) => {
        let goods = JSON.parse(JSON.stringify(products))
        dispatch(getGoods(goods))
    }


export default goodsReducer