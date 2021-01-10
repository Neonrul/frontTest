import React from 'react'
import GoodsItem from './GoodsItem'

const Goods = (props) => {
    const goodsItem = props.goods.map((g, i) => <GoodsItem key={i} title={g.title} code={g.code}
                                                           image={g.primaryImageUrl} productId={g.productId}
                                                           priceGold={g.priceGold} priceRetail={g.priceRetail}
                                                           priceRetailAlt={g.priceRetailAlt}
                                                           priceGoldAlt={g.priceGoldAlt} unitRatio={g.unitRatio}
                                                           unitRatioAlt={g.unitRatioAlt} unitFull={g.unitFull}
                                                           unitAlt={g.unitAlt} assocProducts={g.assocProducts}/>)
    return (
        <div>
            {goodsItem}
        </div>
    )
}

export default Goods
