import React, { useContext, useEffect, useState } from "react";
import style from './CSS/ShopCategoryStyles/ShopCategory.module.css';
import './CSS/ShopCategoryStyles/ShopCategory.css'
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";





const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);
    const [sortOrder, setSortOrder] = useState('newest')
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Hàm xử lý thay đổi sắp xếp
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  useEffect(() => {
    let sortedProducts = all_product.filter(
      (item) => item.category === props.category
    );

    if (sortOrder === 'low-to-high') {
      sortedProducts.sort((a, b) => a.new_price - b.new_price);
    } else if (sortOrder === 'high-to-low') {
      sortedProducts.sort((a, b) => b.new_price - a.new_price);
    } else if (sortOrder === 'name-asc') {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(sortedProducts); // Cập nhật state với danh sách đã lọc và sắp xếp
  },[sortOrder, all_product, props.category]);
  return (
    <div className='shop-category'>

      <div className={style.news_header}>
        <h1 className={style.title}>Danh sách sản phẩm</h1>
        <div className={style.breadcrumb}>
          <h3 className={style.breadcrumb_1}>Trang chủ</h3>
          <i className="fa-solid fa-chevron-right"></i>
          <span className={style.breadcrumb_1}>Danh sách sản phẩm</span>
        </div>
      </div>
      {/* filter */}
      <div className="filter">
        <div className="filter-item">
          <span className="orange-text">Hiển thị:</span>
        </div>
        <div className="filter-item">
          <span className="orange-text">Sắp xếp: </span>
          <select name="sort" id="sort" onChange={handleSortChange}>
            <option value="name-asc">Theo tên</option>
            <option value="low-to-high">Giá từ thấp đến cao</option>
            <option value="high-to-low">Giá từ cao đến thấp</option>
          </select>
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredProducts.map((item, i) => {
          if (item.category === props.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else {
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory
