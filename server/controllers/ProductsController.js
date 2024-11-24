const {Product, Category, ColorCountSizes, Cart, addToCart} = require("../models/ProductsSchema");


class ProductsController {

    static getData = async (req, res) => {

        try {

            const products = await Product.find();

            if (products.length > 0) {
                console.log('Data found in the database');
                res.status(200).json({products});
            }

        }catch(error) {
            console.log('Data not found:', error);
            res.status(400).json({error: 'Data not found'});
        }
    }

    static getCategories = async (req, res) => {
        try {

            const categories = await Category.find();

            if (categories.length > 0) {
                console.log('Data found in the database');
                res.status(200).json(categories);
            }

        }catch(error) {
            console.log('Categories not found:', error);
            res.status(400).json({error: 'Data not found'});
        }
    }

    static getColSizes = async (req, res) => {
        try {

            const colorSizes = await ColorCountSizes.find();

            if (colorSizes.length > 0) {
                console.log('Data found in the database');
                res.status(200).json(colorSizes);
            }

        }catch(error) {
            console.log('Categories not found:', error);
            res.status(400).json({error: 'Data not found'});
        }
    }

    static postItemToCart = async (req, res) => {
        const product = req.body;
        const userId = product.userId;

        try {
            await addToCart(userId, product);
            res.status(200).json({ product });
        } catch (error) {
            console.log('Error saving item to cart', error);
        }
    };

    static getCartItems = async (req, res) => {
        try {

            const data = await Cart.find();
            console.log(data);
            res.status(200).json({data});

        }catch(error) {
            console.log('Error fetching cart data');
        }
    }

}

module.exports = ProductsController;