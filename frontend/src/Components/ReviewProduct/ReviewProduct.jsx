import React from 'react'
import './ReviewProduct.css'

export const ReviewProduct = () => {
  return (
    <div>
      <div className="rating-section">
        <h3>Khách hàng đánh giá</h3>
        <div className="rating-summary">
          <div className="rating-number">
            <span className="rating-score">5</span>
            <div className="stars">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </div>
          <div className="rating-details">
            <div className="rating-row">
              <span className="star-level">5★</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: "100%" }}></div>
              </div>
              <span className="percent">100%</span>
            </div>
            <div className="rating-row">
              <span className="star-level">4★</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: "0%" }}></div>
              </div>
              <span className="percent">0%</span>
            </div>
            <div className="rating-row">
              <span className="star-level">3★</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: "0%" }}></div>
              </div>
              <span className="percent">0%</span>
            </div>
            <div className="rating-row">
              <span className="star-level">2★</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: "0%" }}></div>
              </div>
              <span className="percent">0%</span>
            </div>
            <div className="rating-row">
              <span className="star-level">1★</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: "0%" }}></div>
              </div>
              <span className="percent">0%</span>
            </div>
          </div>
        </div>
        <div className="rating-action">
          <p>Chia sẻ nhận xét về sản phẩm</p>
          <button className="review-button">ĐÁNH GIÁ VÀ NHẬN XÉT</button>
        </div>
      </div>

        {/* Review Comment */}
      
      <div className="review-section">
        <div className="user-review">
          <div className="user-info">
            <div className="user-avatar">LĐ</div>
            <div className="user-details">
              <p className="user-name">Lân Đình</p>
              <p className="review-time">1 tháng trước</p>
            </div>
          </div>
          <div className="user-rating">
            <div className="stars">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p>Đánh giá của bạn về sản phẩm này: Sản phẩm tốt</p>
            <button className="reply">↩ Trả lời</button>
          </div>
        </div>

        <div className="comment-section">
          <h3>Bình luận</h3>
          <div className="comment-box">
            <textarea></textarea>
          </div>
          <div className="comment-tools">
              <button className="submit-button">GỬI BÌNH LUẬN</button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default ReviewProduct
