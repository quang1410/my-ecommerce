import React from 'react'

const CartItem = () => {
    return (
        <div className="items">
            <div className="check-item">
                <div className="check-item-left">
                    <input type="checkbox" className="checkbox-wrap__input"/>
                    <img src="https://didongviet.vn/pub/media/catalog/product//i/p/iphone-12-didongviet_1.jpg" alt="iphone" className="check-item-left__img"/>
                    <span>iPhone 12 128GB Chính hãng (VN/A)</span>
                </div>
                <div className="check-item-middle">
                    <div className="btn-group middle-btn">
                        <button type="button" className="btn-quantity">-</button>
                        <button type="button" className="btn-quantity">1</button>
                        <button type="button" className="btn-quantity">+</button>
                    </div>
                    <div className="middle-color">
                        <label for="select-color">Màu:</label>
                        <select name="color" id="select-color" className="select-color">
                            <option value="den">Đen</option>
                            <option value="hong">Hồng</option>
                            <option value="trang">Trắng</option>
                            <option value="xanh">Xanh</option>
                        </select>
                    </div>
                </div>
                <div className="check-item-right">
                    <span>25.000.000đ</span>
                    <div className="item-right-icon">
                        <i class='bx bxs-heart' ></i>
                        <i class='bx bx-trash'></i>
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default CartItem
