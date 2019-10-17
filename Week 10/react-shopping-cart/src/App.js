import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContext from "./contexts/ProductContext"
import CartContext from "./contexts/CartContext"
import { useLocalStorage } from './components/hooks/useLocalStorage';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useLocalStorage('cart', [])

	const addItem = item => {
		setCart([...cart, {...item, id: Date.now()}]);
	};

	const removeItem = shopItem => {
		setCart(cart.filter(item => item.id !== shopItem.id))
	}

	return (
		<CartContext.Provider value={{cart, removeItem}}>
			<ProductContext.Provider value={{products, addItem}}>
				<div className="App">
					<Navigation />
					<Route exact path="/" component={Products} />
					<Route path="/cart" component={ShoppingCart} />
				</div>
			</ProductContext.Provider>
		</CartContext.Provider>
	);
}

export default App;
