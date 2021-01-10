import React, { useEffect } from 'react'
import Goods from './Goods'
import { getGoodsFromJson } from '../Store/goodsReducer'
import { connect } from 'react-redux'

const GoodsContainer = (props) => {

    useEffect(()=> {
        props.getGoodsFromJson()
    }, [])

        return (
            <div>
                <Goods goods={props.goods}/>
            </div>
        )
    },

    mapStateToProps = (state) => {
        return {
            goods: state.goodsReducer.goods
        }
    },

    AC = {getGoodsFromJson}

export default connect(mapStateToProps, AC)(GoodsContainer)

