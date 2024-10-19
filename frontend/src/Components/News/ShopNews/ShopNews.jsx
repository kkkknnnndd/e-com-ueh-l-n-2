import React from 'react'
import './ShopNews.css'
import all_news from '../../Assets/image/news_details'
import News from '../News'

const ShopNews = () => {
  return (
    <div className='ShopNews'>
      <div className="filter-n">
        <div className="filter-item-n">
          <span className="orange-text-n">Hiển thị:</span>
        </div>
        <div className="filter-item-n">
          <span className="orange-text-n">Sắp xếp: </span>
          <select name="sort" id="sort">
            <option value="name-asc">Theo tên</option>
            <option value="low-to-high">Giá từ thấp đến cao</option>
            <option value="high-to-low">Giá từ cao đến thấp</option>
          </select>
        </div>
      </div>

      <div className="content-grid">
        {all_news.map((item, i) => {
          return <News key= {i} id={item.id} name={item.name} image={item.image} date={item.date} details={item.details}/>
        })}
      </div>
    </div>
  )
}

export default ShopNews