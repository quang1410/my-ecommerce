import React from 'react'

import CartItem from './CartItem'
import { Link } from 'react-router-dom';

import './Cart.css'

const Cart = () => {
    return (
      <div className="cart">
        <div className="cart-info">
          <div className="select-all">
            <div className="checkbox-wrap">
              <input
                type="checkbox"
                className="checkbox-wrap__input"
                id="checkbox__input"
              />
              <label for="checkbox__input">Chọn tất cả (1 sản phẩm)</label>
            </div>
            <div className="delete-all">
              <i class='bx bx-trash'></i>
              <span>Xóa</span>
            </div>
          </div>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="cart-checkout">
          <h4>Thông tin đơn hàng</h4>
          <div className="price">
            Tạm Tính (1 SP)
            <span>25.000.000đ</span>
          </div>
          <div className="delivery-fee">
            Phí giao hàng
            <span>15.000đ</span>
          </div>
          <div className="voucher">
            <input
              type="text"
              placeholder="Mã giảm giá(mã chỉ áp dụng 1 lần)"
              className="voucher__input"
            />
            <button type="button " className="voucher__btn">
              Áp Dụng
            </button>
          </div>
          <div className="total">
            <h6 className="total__title">Tổng Cộng:</h6>
            <span className="total__price">25.015.000đ</span>
          </div>
          <div className="checkout">
            <Link
              to="/checkout"
            >
              <button type="button " className="checkout__btn">Thanh Toán Ngay</button>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Cart
