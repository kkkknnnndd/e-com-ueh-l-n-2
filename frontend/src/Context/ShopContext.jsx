import React, { createContext, useEffect, useState } from "react";
import axios from "axios"

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300; index++) {
    cart[index] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaultCart())
  const url = "http://localhost:4000"
  const [token, setToken] = useState("")
  const [all_product, setProductList] = useState([])

  const addToCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    console.log(cartItems);

    if (token) {
      await axios.post(url+"/api/cart/add",{itemId},{Headers:{token}})
      
    }
  }


  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    console.log(cartItems);
    if (token) {
      await axios.post(url+"/api/cart/remove",{itemId},{Headers})
      
    }
  }

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product._id === Number(item))
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  }

  const fetchProductList = async () => {
    try {
      const response = await axios.get(url + "/api/product/list");
      console.log(response.data.data);  // Kiểm tra dữ liệu nhận được
      setProductList(response.data.data);
    } catch (error) {
      console.error("Error fetching product list:", error);
    }
  }

  const loadCartData = async (token)=> {
    const response = await axios.post(url+"/api/cart/get",{},{Headers:{token}})
    setCartItems(response.data.cartData);
  }

  useEffect(() => {
    console.log("Fetching product list...");
    async function loadData() {
      await fetchProductList();
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, [])

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }

  useEffect(()=>{
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  },[])

  const contextValue = {
    all_product,
    url,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
    getTotalCartItems,
    token,
    setToken
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;