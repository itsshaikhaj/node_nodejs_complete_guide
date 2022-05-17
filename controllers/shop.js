// const products = [];
const Product = require('../models/product');


exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'Get Al Products',
            path: '/products',
            // hasProducts: products.length > 0,
            // activeShop: true,
            // productCSS: true
        });
    });
}

exports.getIndex = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            // hasProducts: products.length > 0,
            // activeShop: true,
            // productCSS: true
        });
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Your Cart',
        path: '/cart'
    })
}
exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Your Orders',
        path: '/orders'
    })
}

exports.getCheckOut = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout'
    })
}
