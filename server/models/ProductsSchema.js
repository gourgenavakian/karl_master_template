const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const categorySchema = new mongoose.Schema({
    title: { type: String, required: true },
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null }
});

const colorsAndCountSizesSchema = new mongoose.Schema({
    colors: [{
        color: { type: String },
        count: { type: Number, default: 0 }
    }],
    sizes: [{ type: String }]
});

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    rate: { type: Number, required: true },
    available: { type: String, default: "In Stock" },
    information: { type: String },
    description: { type: String },
    sizes: [{ type: String }],
    recommended: { type: Boolean, default: false },
    colors: [{
        color: { type: String },
        count: { type: Number, default: 0 }
    }],
    img: { type: String },
    category: { type: String }
});

const cartSchema = new mongoose.Schema({
    items: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            name: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, default: 1 },
            size: { type: String },
            selectedColor: {
                color: { type: String },
                count: { type: Number, default: 0 }
            },
            img: { type: String }
        }
    ],
    totalQuantity: { type: Number, default: 0 },
    totalPrice: { type: Number, default: 0 },
    userId: { type: Number, required: true },
});

const Cart = mongoose.model('Cart', cartSchema);
const Product = mongoose.model('Product', productSchema);
const Category = mongoose.model('Category', categorySchema);
const ColorCountSizes = mongoose.model('ColorCountSizes', colorsAndCountSizesSchema);


async function addProducts(products) {
    try {
        if (Array.isArray(products)) {
            const savePromises = products.map(async (product) => {
                const newProduct = new Product(product);
                await newProduct.save();
            });
            await Promise.all(savePromises);
        }
        console.log(`${products.length} products were added to the database.`);
    } catch (error) {
        console.error('Error adding products:', error);
    }
}

async function addCategories(categories) {
    try {
        const categoryMap = new Map();


        for (const cat of categories) {

            const parentId = cat.parentId ? categoryMap.get(cat.parentId) : null;
            const newCategory = new Category({
                title: cat.title,
                parentId: parentId
            });

            const savedCategory = await newCategory.save();
            categoryMap.set(cat.id.toString(), savedCategory._id); // Сохраняем `ObjectId` в мапе
        }

        console.log('All categories successfully added !!!');
    } catch (error) {
        console.error('Error adding category:', error);
    }
}

async function addColorCountSizes(colSizes) {
    try {
        const colorSizes = new ColorCountSizes(colSizes);
        await colorSizes.save();
        console.log('Colors and sizes saved in DB successfully');
    } catch (error) {
        console.log('Error adding color sizes:', error);
    }
}

async function addToCart(userId, product) {
    try {
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({ userId, items: [], totalQuantity: 0, totalPrice: 0 });
        }

        const existingItemIndex = cart.items.findIndex(item => item.productId.equals(product.items[0].productId));

        if (existingItemIndex !== -1) {
            cart.items[existingItemIndex].quantity += product.items[0].quantity;
        } else {
            cart.items.push({
                productId: product.items[0].productId,
                name: product.items[0].name,
                price: product.items[0].price,
                img: product.items[0].img,
                quantity: product.items[0].quantity
            });
        }

        cart.totalQuantity += product.totalQuantity;
        cart.totalPrice += product.totalPrice;

        await cart.save();
        console.log("Product successfully added to cart.");
    } catch (error) {
        console.error("Error adding to cart:", error);
    }
}



module.exports = {Product, Category, ColorCountSizes, Cart, addToCart, addColorCountSizes, addProducts, addCategories};
