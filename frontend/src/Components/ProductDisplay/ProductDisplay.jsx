import React, { useContext } from 'react';
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {

    const { product } = props;
    const { addToCart } = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <span>(122 Đánh giá)</span>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          Kéo học sinh Loại kéo nhỏ dành cho học sinh làm thủ công, được làm bằng kim loại không
          gỉ, mũi kéo tròn để bảo vệ an toàn cho trẻ khi sử dụng. Tay cầm bằng nhựa giúp cắt nhẹ
          nhàng, không đau tay. hai lưỡi đồng được giữ áp sát vào nhau một cách linh hoạt nhằm để
          giữ hai lưỡi kéo tại đúng vị trí, cho phép chúng được ép sát lại với nhau.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <div className="productdisplay-right-button">
            <div className="counter-container">
              <div className="counter-display">
                <span id="count">1</span>
              </div>
              <div className="counter-buttons">
                <button id="increment">+</button>
                <button id="decrement">-</button>
              </div>
            </div>
            <button className="add-to-cart" onClick={()=>{addToCart(product.id)}}>THÊM GIỎ HÀNG</button>
            <div className="heart">
                <i className="fa-regular fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
