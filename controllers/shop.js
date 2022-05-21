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

exports.getProduct = (req, res, next) => {
    console.log("req", req.params.productId);
    Product.findById(req.params.productId, (product) => {
        res.render('shop/product-detail', {
            pageTitle: 'Product Detail',
            path: '/products',
            product: product
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


exports.postCart = (req, res, next) => {
    const productId = req.body.productId;
    console.log("productId", productId);
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
