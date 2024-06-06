import React, {useContext} from "react";
import { ScProduct } from "./scParts";
import {ProductContext} from "../Contexts/ProductContext";
import { CartContext } from "../Contexts/CartContext";


const Product = (props) => {
  const {products} = useContext(ProductContext);
  const {addItem} = useContext(CartContext);
  const product = products.find(item => props.product.id===item.id)
  
  return (
    <ScProduct>
      <img src={product?.image} alt={`${product?.title} book`} />
      <div className="details">
        <h1 className="title">{product?.title}</h1>
        <div className="footer">
          <p className="price">${product?.price}</p>
          <button onClick={() => addItem(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </ScProduct>
  );
};

export default Product;