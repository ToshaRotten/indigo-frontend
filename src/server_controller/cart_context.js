import React, { createContext, useState, useContext, useMemo } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (product) => {
		setCartItems((prevItems) => {
			const existingItem = prevItems.find((item) => item.id === product.id);
			if (existingItem) {
				return prevItems.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item,
				);
			} else {
				return [...prevItems, { ...product, quantity: 1 }];
			}
		});
	};

	const updateQuantity = (productId, newQuantity) => {
		setCartItems((prevItems) => {
			if (newQuantity <= 0) {
				return prevItems.filter((item) => item.id !== productId);
			} else {
				return prevItems.map((item) =>
					item.id === productId ? { ...item, quantity: newQuantity } : item,
				);
			}
		});
	};

	const removeFromCart = (productId) => {
		setCartItems((prevItems) =>
			prevItems.filter((item) => item.id !== productId),
		);
	};

	const clearCart = () => {
		setCartItems([]);
	};

	const totalAmount = useMemo(() => {
		return cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0,
		);
	}, [cartItems]);

	const contextValue = useMemo(
		() => ({
			cartItems,
			addToCart,
			updateQuantity,
			removeFromCart,
			clearCart,
			totalAmount,
		}),
		[cartItems, totalAmount],
	);

	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
}

export function useCart() {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
}
