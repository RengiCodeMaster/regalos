import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, ShoppingCart, Plus, Minus, ShoppingBag } from 'lucide-react';

const CartDrawer: React.FC = () => {
    const { items, isOpen, total, toggleCart, removeItem, updateQuantity, checkoutWhatsApp, clearCart } = useCart();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] overflow-hidden">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={toggleCart}
            />

            {/* Drawer */}
            <div className="fixed inset-y-0 right-0 max-w-full flex">
                <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full transform transition-transform duration-300 ease-in-out">

                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-red-50 to-pink-50">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center">
                                <ShoppingBag className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">Tu Carrito</h2>
                                <p className="text-xs text-gray-500">{items.length} {items.length === 1 ? 'producto' : 'productos'}</p>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-white/50 rounded-full"
                            onClick={toggleCart}
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto px-6 py-4">
                        {items.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-center py-12">
                                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                    <ShoppingCart className="w-12 h-12 text-gray-300" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Carrito vacío</h3>
                                <p className="text-sm text-gray-500 mb-6 max-w-xs">
                                    ¡Agrega algunos productos para comenzar tu pedido!
                                </p>
                                <button
                                    onClick={toggleCart}
                                    className="px-6 py-3 bg-brand-red text-white rounded-full font-medium hover:bg-brand-dark transition-colors shadow-lg"
                                >
                                    Explorar productos
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex gap-4">
                                            {/* Product Image */}
                                            <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl overflow-hidden border border-gray-100">
                                                {item.image ? (
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => {
                                                            e.currentTarget.style.display = 'none';
                                                        }}
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center">
                                                        <ShoppingBag className="w-8 h-8 text-brand-red/30" />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Product Info */}
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-sm font-bold text-gray-900 line-clamp-2 mb-1">
                                                    {item.name}
                                                </h3>
                                                <p className="text-xs text-gray-500 mb-2">{item.category}</p>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="w-7 h-7 flex items-center justify-center text-gray-600 hover:text-brand-red hover:bg-white rounded-md transition-colors"
                                                        >
                                                            <Minus className="w-4 h-4" />
                                                        </button>
                                                        <span className="w-8 text-center text-sm font-bold text-gray-900">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="w-7 h-7 flex items-center justify-center text-gray-600 hover:text-brand-red hover:bg-white rounded-md transition-colors"
                                                        >
                                                            <Plus className="w-4 h-4" />
                                                        </button>
                                                    </div>

                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                        title="Eliminar"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Price */}
                                            <div className="flex flex-col items-end justify-between">
                                                <p className="text-lg font-bold text-gray-900">
                                                    S/ {(item.price * item.quantity).toFixed(2)}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    S/ {item.price.toFixed(2)} c/u
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer - Checkout */}
                    {items.length > 0 && (
                        <div className="border-t border-gray-100 px-6 py-6 bg-gray-50">
                            {/* Total */}
                            <div className="bg-white rounded-xl p-4 mb-4 border border-gray-100">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-gray-600">Subtotal</span>
                                    <span className="text-lg font-bold text-gray-900">S/ {total.toFixed(2)}</span>
                                </div>
                                <p className="text-xs text-gray-500 text-center">
                                    El envío se coordina por WhatsApp
                                </p>
                            </div>

                            {/* Checkout Button */}
                            <button
                                onClick={checkoutWhatsApp}
                                className="w-full flex justify-center items-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-white bg-green-600 hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Finalizar pedido
                            </button>

                            {/* Clear Cart */}
                            <button
                                onClick={clearCart}
                                className="w-full mt-3 text-sm font-medium text-gray-500 hover:text-red-600 transition-colors py-2"
                            >
                                Vaciar carrito
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;
