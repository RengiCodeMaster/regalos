import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, ShoppingCart } from 'lucide-react';

const CartDrawer: React.FC = () => {
    const { items, isOpen, total, toggleCart, removeItem, updateQuantity, checkoutWhatsApp, clearCart } = useCart();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] overflow-hidden">
            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={toggleCart} />

            <div className="fixed inset-y-0 right-0 max-w-full flex">
                <div className="w-screen max-w-md bg-white shadow-xl flex flex-col h-full transform transition-transform duration-300 ease-in-out">
                    <div className="flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200">
                        <h2 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                            <ShoppingCart className="w-5 h-5 text-gray-500" />
                            Tu Carrito
                        </h2>
                        <button
                            type="button"
                            className="text-gray-400 hover:text-gray-500 focus:outline-none"
                            onClick={toggleCart}
                        >
                            <span className="sr-only">Cerrar panel</span>
                            <X className="w-6 h-6" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        {items.length === 0 ? (
                            <div className="text-center py-12">
                                <ShoppingCart className="mx-auto h-12 w-12 text-gray-400 opacity-50 mb-4" />
                                <h3 className="text-lg font-medium text-gray-900">Carrito vacío</h3>
                                <p className="mt-1 text-sm text-gray-500">¡Agrega algunos detallitos para empezar!</p>
                                <button
                                    onClick={toggleCart}
                                    className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-brand-red bg-red-50 hover:bg-red-100"
                                >
                                    Continuar comprando
                                </button>
                            </div>
                        ) : (
                            <ul className="-my-6 divide-y divide-gray-200">
                                {items.map((item) => (
                                    <li key={item.id} className="py-6 flex">
                                        <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-center object-cover"
                                            />
                                        </div>

                                        <div className="ml-4 flex-1 flex flex-col">
                                            <div>
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <h3 className="line-clamp-2">{item.name}</h3>
                                                    <p className="ml-4">S/ {item.price.toFixed(2)}</p>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                                            </div>
                                            <div className="flex-1 flex items-end justify-between text-sm">
                                                <div className="flex items-center border border-gray-300 rounded-md">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="px-2 py-1 text-gray-600 hover:text-gray-900 disabled:opacity-50"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="px-2 py-1 border-l border-r border-gray-300 min-w-[2rem] text-center bg-gray-50">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="px-2 py-1 text-gray-600 hover:text-gray-900"
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() => removeItem(item.id)}
                                                    className="font-medium text-brand-red hover:text-red-700 flex items-center gap-1"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                    <span className="hidden sm:inline">Eliminar</span>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {items.length > 0 && (
                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6 bg-gray-50">
                            <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                                <p>Subtotal</p>
                                <p>S/ {total.toFixed(2)}</p>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500 mb-6">
                                El envío y los impuestos se calculan al finalizar la compra.
                            </p>
                            <div className="mt-6">
                                <button
                                    onClick={checkoutWhatsApp}
                                    className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                                >
                                    Finalizar pedido en WhatsApp
                                </button>
                            </div>
                            <div className="mt-4 flex justify-center">
                                <button
                                    onClick={clearCart}
                                    className="text-sm font-medium text-gray-500 hover:text-gray-700 underline"
                                >
                                    Vaciar carrito
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;
