
import './style.css';

import React, {useState, useEffect} from "react";
import axios from 'axios';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../../components/Header';
import HomeComponent from '../../components/HomeComponent';
import Menu from '../../components/Menu';
import Login from '../../components/Login';
import Register from '../../components/Register';
import NewsList from '../../components/NewsList';
import ProductDetail from '../../components/ProductDetail';
import NewsDetail from '../../components/NewsDetail';
import Cart from '../../components/Cart';


export default function Home() {

    // useEffect(() => {
    //     axios.get(`http://localhost/example`)
    //     .then(res => {
    //         console.log(res.data);
    //         setExampleData(JSON.stringify(res.data));
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     }, []);
    // });
    const [cartList, setCartList] = useState([]);

    const addToCart = (urlImage, productName, amount, price) => {
        const newCartList = [...cartList, {
            urlImage: urlImage,
            productName: productName, 
            amount: amount,
            price: price
        }];
        setCartList(newCartList);
        localStorage.setItem('cart_list', JSON.stringify(newCartList));
    }

    const changeCartAmount = (index, op) => {
        const newCartList = [...cartList];
        if (op == '+') newCartList[index].amount++;
        else if (op == '-' && newCartList[index].amount > 1) newCartList[index].amount--; 
        setCartList(newCartList);
        localStorage.setItem('cart_list', JSON.stringify(newCartList));
    }

    const removeCartItem = (index) => {
        const newCartList = [...cartList];
        newCartList.splice(index, 1);
        setCartList(newCartList); 
        localStorage.setItem('cart_list', JSON.stringify(newCartList));
    }

    return (
        <div>
            <Header 
                
            />  
            {/* <HomeComponent /> */}
            {/* <Menu /> */}
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/menu/:menu_id" element={<ProductDetail />} />
                <Route path="/news" element={<NewsList />} />
                <Route path="/news/:news_id" element={<NewsDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route 
                    path="/cart" 
                    element={
                        <Cart 
                            cartList={cartList}
                            addToCart={addToCart}
                            changeCartAmount={changeCartAmount}
                            removeCartItem={removeCartItem}
                        />
                    
                    } 
    
                />
            </Routes>

        </div>
    );
}