
export const ProductData = ({title, price, discount, imageUrl}) => {

    return (
        <div className="productCard">
            <img className="productCard__image" src={imageUrl}></img>
            <ul className="productCard__price__list">
            {discount ? <li><span className="productCard__price-sale">{(1-discount)*price} ₽</span></li>:null}
            {discount ? <li><span className="productCard__price-before">{price} ₽  </span></li>:<li><span className="productCard__price-default">{price} ₽</span></li>}
            </ul>
            <h2 className="productCard__name" >{title}</h2>

        </div>
    )

}