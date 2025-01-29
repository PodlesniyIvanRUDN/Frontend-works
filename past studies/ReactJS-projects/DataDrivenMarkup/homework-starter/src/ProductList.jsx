import {ProductData} from "./ProductData"
import './style.css';
export const ProductList = (items) =>{
    
    let objVals = items.products;

    return ( <ul className="productList">
            { objVals.map((product) => (
                <li className="productList__item col-lg-3" key={product.id}>
                    <ProductData
                        id = {product.id}
                        title = {product.title}
                        price = {product.price}
                        discount = {product.discount}
                        imageUrl = {product.imageUrl}
                    />
                </li>

            ))}

    </ul>

    )

}