import React, { useContext } from 'react';

import CartContext from "../contexts/CartContext"
const Item = ({ item }) => {
	const { removeItem } = useContext(CartContext)

	console.log(item)
	return (
		<div className="shopping-cart_item">
			<img src={item.image} alt={`${item.title} book`} />


			<div>
				<h1>{item.title}</h1>
				<p>$ {item.price}</p>
				<button onClick={() => removeItem(item)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
