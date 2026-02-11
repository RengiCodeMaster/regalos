import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

export interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    isOpen: boolean;
    total: number;
    addItem: (product: Product) => void;
    removeItem: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    toggleCart: () => void;
    clearCart: () => void;
    checkoutWhatsApp: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>(() => {
        // Load from local storage if available
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(items));
    }, [items]);

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const addItem = (product: Product) => {
        setItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setIsOpen(true); // Open cart when adding item for feedback
    };

    const removeItem = (id: number) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQuantity = (id: number, quantity: number) => {
        if (quantity < 1) {
            removeItem(id);
            return;
        }
        setItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, quantity } : item))
        );
    };

    const toggleCart = () => setIsOpen((prev) => !prev);
    const clearCart = () => setItems([]);

    const checkoutWhatsApp = () => {
        if (items.length === 0) return;

        let message = "Hola Detallitos Jany, me gustaría realizar el siguiente pedido:%0A%0A";

        items.forEach((item) => {
            message += `• ${item.quantity}x ${item.name} - S/ ${(item.price * item.quantity).toFixed(2)}%0A`;
        });

        message += `%0A*Total: S/ ${total.toFixed(2)}*`;
        message += "%0A%0A¿Me confirman disponibilidad y método de pago?";

        const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`; // No encodeURIComponent needed on the whole message if we use %0A manually, but safer to encode the user parts. 
        // Actually safer to build string normally and encode at end.

        let plainMessage = "Hola Detallitos Jany, me gustaría realizar el siguiente pedido:\n\n";
        items.forEach((item) => {
            plainMessage += `• ${item.quantity}x ${item.name} - S/ ${(item.price * item.quantity).toFixed(2)}\n`;
        });
        plainMessage += `\n*Total: S/ ${total.toFixed(2)}*`;
        plainMessage += "\n\n¿Me confirman disponibilidad y método de pago?";

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(plainMessage)}`, '_blank');
    };

    return (
        <CartContext.Provider
            value={{
                items,
                isOpen,
                total,
                addItem,
                removeItem,
                updateQuantity,
                toggleCart,
                clearCart,
                checkoutWhatsApp,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
