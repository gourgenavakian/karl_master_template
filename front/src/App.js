import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import axios from "axios";
import ModalPage from "./components/ModalPage";


function App(props) {
    // const [data, setData] = useState(JSON.parse(localStorage.getItem('products')) || []);
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [colors, setColors] = useState([]);


    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('http://localhost:8080/products');
                if (res.data) {
                    // localStorage.setItem('products', JSON.stringify(res.data))
                    setData(res.data.products);
                    console.log('App.js', data);
                }
            } catch (error) {
                console.log('Error fetching data: ' + error.message);
            }
        };

        getData().then(() => {
            console.log('Connected to server');
        });
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await axios.get('http://localhost:8080/categories');
                if (res.data) {

                    setCategories(res.data);
                    console.log('Categories: ', data);
                }
            } catch (error) {
                console.log('Error fetching data: ' + error.message);
            }
        }
        getCategories().then(() => {
            console.log('Connected to server');
        });

    }, []);

    useEffect(() => {

        const getColors = async () => {
            try {
                const res = await axios.get('http://localhost:8080/colors');
                if (res.data) {

                    setColors(res.data);
                    console.log('Categories: ', colors);
                }
            } catch (error) {
                console.log('Error fetching data: ' + error.message);
            }
        }
        getColors().then(() => {
            console.log('Connected to server');
        })

    }, []);

    useEffect(() => {

        if (data && data.length > 0) console.log('Data updated: ', data);

    }, [data]);

    useEffect(() => {

        if (categories && categories.length > 0) console.log('Categories updated: ', categories);

    }, [categories]);

    useEffect(() => {

        if (colors && colors.length > 0) console.log('Colors updated: ', colors);

    }, [colors]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home data={data} />} />
                <Route path="/cart" element={<Cart data={data} />} />
                <Route path="/checkout" element={<Checkout data={data} />} />
                <Route path="/product-details" element={<ProductDetails data={data} />} />
                <Route path="/shop" element={<Shop data={data} categories={categories} colors={colors} />} />
                <Route path="/shop/:page" element={<Shop data={data} categories={categories}/>} />
                <Route path='/mod' element={<ModalPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
