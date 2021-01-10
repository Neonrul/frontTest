import React, { useState } from 'react'
import style from './GoodsItem.module.css'
import Counter from './Counter'

const GoodsItem = ({
                       key, title, code, image, priceGold, productId, unitRatio, unitRatioAlt,
                       unitFull, unitAlt, assocProducts, priceRetail, priceRetailAlt, priceGoldAlt
                   }) => {
    const goodsTags = assocProducts.split(';').map(i => <span>{i}</span>),
        [priceFlag, switchPriceFlag] = useState(false),
        [count, changeCount] = useState(1),
        imagesModify = (img) => {
            let imageName = img.split('.')
            imageName[imageName.length - 2] = imageName[imageName.length - 2] + '_220x220_1'
            return imageName.join('.')
        }

    return (
        <div className={style.product} key={key}>
            <div className={style.info}>
                <div className={style.code}>
                <span>
                    Код: {code}
                </span>
                </div>
                <div className={style.status}>
                    <span>Наличие</span>
                </div>
            </div>
            <div className={style.photo}>
                <img src={imagesModify(image)} alt=""/>
            </div>
            <div className={style.description}>
                <div>{title}</div>
            </div>
            <div className={style.productTags}>
                <text>{'Могут понадобиться: '}</text>
                {goodsTags}
            </div>
            {priceFlag ?
                <div className={style.price}>
                    <text>По карте <br/> клуба:</text>
                    <div className={style.gold}>
                        {priceGold}
                        <span className={style.sprite}>{''}</span>
                    </div>
                    <div className={style.retail}>
                        {priceRetail}
                        <span className={style.sprite}>{''}</span>
                    </div>
                </div> :
                <div className={style.price}>
                    <text>По карте <br/> клуба:</text>
                    <div className={style.gold}>
                        {+priceGoldAlt.toFixed(2)}
                        <span className={style.sprite}>{''}</span>
                    </div>
                    <div className={style.retail}>
                        {+priceRetailAlt.toFixed(2)}
                        <span className={style.sprite}>{''}</span>
                    </div>
                </div>
            }
            <div className={style.pricePoint}>
                <p>Можно купить за {Number(priceGold * 0.62).toFixed(2)} балла</p>
            </div>
            <div className={style.priceSwitch}>
                <span className={priceFlag ? style.notActive : style.active} onClick={() => {
                    switchPriceFlag(false)
                }}>За м. кв.
                </span>
                <span className={priceFlag ? style.active : style.notActive} onClick={() => {
                    switchPriceFlag(true)
                }}>За упаковку
                </span>
            </div>
            <div className={style.desc}>
                <span className={style.sprite}>{''}</span>
                <div>
                    {`Продается ${unitFull}ми : `}
                    <br/>
                    {unitRatio + ' ' + unitFull} = {+unitRatioAlt.toFixed(2) + ' ' + unitAlt}
                </div>
            </div>
            <div className={style.cart}>
                <div className={style.counter}>
                    <Counter count={count} changeCount={changeCount}/>
                </div>
                <button data-product-id={productId} onClick={() => {
                    changeCount(1)
                }}>
                    <span className={style.sprite}>{''}</span>
                    <span>В корзину</span>
                </button>
            </div>
        </div>
    )
}

export default GoodsItem