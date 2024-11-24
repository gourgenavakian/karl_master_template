const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {addProducts, addCategories, addColorCountSizes} = require('../models/ProductsSchema');
const {getData, getCategories, getColSizes, postItemToCart, getCartItems} = require('../controllers/ProductsController');


const products = [
    {
        "name": "Floral Maxi Dress 1",
        "rate": 4,
        "price": 49.99,
        "available": "In Stock",
        "information": "A beautiful floral maxi dress perfect for summer outings and beach parties.",
        "description": "Elegant floral design with a flowing silhouette.",
        "sizes": ["S", "M", "L"],
        "colors": [
            {"color": "blue", "count": 4},
            {"color": "pink", "count": 6},
            {"color": "green", "count": 3}
        ],
        "img": "/img/product-img/product-1.jpg",
        "category": "Woman wear"
    },
    {
        "name": "Chic Evening Gown 2",
        "price": 89.99,
        "rate": 5,
        "available": "In Stock",
        "information": "An exquisite evening gown designed to turn heads at formal events.",
        "description": "Sophisticated design with intricate detailing.",
        "sizes": ["M", "L", "XL"],
        "colors": [
            {"color": "black", "count": 2},
            {"color": "red", "count": 3},
            {"color": "navy", "count": 1}
        ],
        "img": "/img/product-img/product-2.jpg",
        "category": "Woman wear"
    },
    {
        "name": "Casual T-shirt Dress 3",
        "price": 29.99,
        "rate": 3,
        "available": "In Stock",
        "information": "A comfortable t-shirt dress that combines style and ease for daily wear.",
        "description": "Perfect for a laid-back day or casual outings.",
        "sizes": ["XS", "S", "M", "L"],
        "colors": [
            {"color": "grey", "count": 5},
            {"color": "white", "count": 4}
        ],
        "img": "/img/product-img/product-3.jpg",
        "category": "Woman wear"
    },
    {
        "name": "Stylish Wrap Dress 4",
        "price": 59.99,
        "rate": 4,
        "available": "In Stock",
        "information": "A versatile wrap dress that can be styled for any occasion.",
        "description": "Features a flattering fit and adjustable waist.",
        "sizes": ["S", "M", "L", "XL"],
        "colors": [
            {"color": "yellow", "count": 3},
            {"color": "black", "count": 2}
        ],
        "img": "/img/product-img/product-4.jpg",
        "category": "Woman wear"
    },
    {
        "name": "Trendy Jumpsuit 5",
        "price": 69.99,
        "rate": 5,
        "available": "In Stock",
        "information": "A trendy jumpsuit that combines comfort with a chic look.",
        "description": "Ideal for both casual and semi-formal occasions.",
        "sizes": ["M", "L"],
        "colors": [
            {"color": "teal", "count": 3},
            {"color": "mustard", "count": 2}
        ],
        "img": "/img/product-img/product-5.jpg",
        "category": "Woman wear"
    },
    {
        "name": "Classic White Shirt 6",
        "price": 39.99,
        "rate": 2,
        "available": "In Stock",
        "information": "A classic white shirt that never goes out of style.",
        "description": "Perfect for both work and casual settings.",
        "sizes": ["S", "M", "L", "XL"],
        "colors": [
            {"color": "white", "count": 10},
            {"color": "light blue", "count": 4}
        ],
        "img": "/img/product-img/product-6.jpg",
        "category": "Woman wear"
    },
    {
        "name": "Men's Casual Shirt 7",
        "price": 44.99,
        "rate": 4,
        "available": "In Stock",
        "information": "A relaxed fit casual shirt, perfect for weekends.",
        "description": "Made with breathable fabric for all-day comfort.",
        "sizes": ["M", "L", "XL"],
        "colors": [
            {"color": "light grey", "count": 3},
            {"color": "navy", "count": 5}
        ],
        "img": "/img/product-img/product-7.jpg",
        "category": "Men wear"
    },
    {
        "name": "Graphic Tee 8",
        "price": 24.99,
        "rate": 5,
        "available": "In Stock",
        "information": "A fun graphic tee to express your personality.",
        "description": "Soft and stylish, ideal for casual outings.",
        "sizes": ["S", "M", "L"],
        "colors": [
            {"color": "black", "count": 6},
            {"color": "white", "count": 4}
        ],
        "img": "/img/product-img/product-8.jpg",
        "category": "Men wear"
    },
    {
        "name": "Men’s Smart T-shirt 9",
        "price": 34.99,
        "rate": 2,
        "available": "In Stock",
        "information": "A smart casual t-shirt for everyday wear.",
        "description": "Easy to pair with jeans or shorts.",
        "sizes": ["M", "L", "XL", "XXL"],
        "colors": [
            {"color": "red", "count": 3},
            {"color": "blue", "count": 5}
        ],
        "img": "/img/product-img/product-9.jpg",
        "category": "Men wear"
    },
    {
        "name": "Sleek Crop Top 10",
        "price": 29.99,
        "rate": 3,
        "available": "In Stock",
        "recommended": true,
        "information": "A stylish crop top for a trendy look.",
        "description": "Perfect for pairing with high-waisted jeans.",
        "sizes": ["S", "M"],
        "colors": [
            {"color": "black", "count": 4},
            {"color": "white", "count": 2}
        ],
        "img": "/img/product-img/product-10.jpg",
        "category": "Woman wear"
    },
    {
        "name": "Comfortable Hoodie 11",
        "price": 54.99,
        "rate": 4,
        "available": "In Stock",
        "recommended": true,
        "information": "A cozy hoodie for chilly days.",
        "description": "Soft and warm, perfect for layering.",
        "sizes": ["M", "L", "XL"],
        "colors": [
            {"color": "grey", "count": 5},
            {"color": "navy", "count": 3}
        ],
        "img": "/img/product-img/product-11.jpg",
        "category": "Woman wear"
    },
    {
        "name": "Comfortable Hoodie 11",
        "price": 54.99,
        "rate": 4,
        "available": "In Stock",
        "recommended": true,
        "information": "A cozy hoodie for chilly days.",
        "description": "Soft and warm, perfect for layering.",
        "sizes": ["M", "L", "XL"],
        "colors": [
            {"color": "grey", "count": 5},
            {"color": "navy", "count": 3}
        ],
        "img": "/img/product-img/product-12.jpg",
        "category": "Woman wear"
    }
];
const category = [
    { "id": "1", "title": "Woman wear", "parentId": null },
    { "id": "2", "title": "Midi Dresses", "parentId": "1" },
    { "id": "3", "title": "Maxi Dresses", "parentId": "1" },
    { "id": "4", "title": "Prom Dresses", "parentId": "1" },
    { "id": "5", "title": "Little Black Dresses", "parentId": "1" },
    { "id": "6", "title": "Mini Dresses", "parentId": "1" },
    { "id": "7", "title": "Man Wear", "parentId": null },
    { "id": "8", "title": "Man Dresses", "parentId": "7" },
    { "id": "9", "title": "Man Black Dresses", "parentId": "7" },
    { "id": "10", "title": "Man Mini Dresses", "parentId": "7" },
    { "id": "11", "title": "Children", "parentId": null },
    { "id": "12", "title": "Children Dresses", "parentId": "11" },
    { "id": "13", "title": "Mini Dresses", "parentId": "11" },
    { "id": "14", "title": "Bags & Purses", "parentId": null },
    { "id": "15", "title": "Bags", "parentId": "14" },
    { "id": "16", "title": "Purses", "parentId": "14" },
    { "id": "17", "title": "Eyewear", "parentId": null },
    { "id": "18", "title": "Eyewear Style 1", "parentId": "17" },
    { "id": "19", "title": "Eyewear Style 2", "parentId": "17" },
    { "id": "20", "title": "Eyewear Style 3", "parentId": "17" },
    { "id": "21", "title": "Footwear", "parentId": null },
    { "id": "22", "title": "Footwear 1", "parentId": "21" },
    { "id": "23", "title": "Footwear 2", "parentId": "21" },
    { "id": "24", "title": "Footwear 3", "parentId": "21" }
];
const colSizes = {
    "colors": [
        {
            "color": "gray",
            "count": 3
        },
        {
            "color": "red",
            "count": 25
        },
        {
            "color": "yellow",
            "count": 112
        },
        {
            "color": "teal",
            "count": 9
        },
        {
            "color": "cyan",
            "count": 29
        }
    ],
    "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL"
    ]
};


/* GET home page. */
router.get('/products', getData);

router.get('/categories', getCategories);

router.get('/colors', getColSizes);

router.post('/add-item-to-cart', postItemToCart);
router.get('/items-in-cart', getCartItems);


const start = async () => {

  try{

    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to mongodb");
    await addProducts(products);
    await addCategories(category);
    await addColorCountSizes(colSizes)

  }catch(e){
    console.log('error connecting to mongodb', e);
  }
}

start()
    .then(() => {
      console.log('Successfully started !!!')
    });

module.exports = router;
