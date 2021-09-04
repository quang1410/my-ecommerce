import React from 'react'

const CartItem = () => {
    return (
        <div className="items">
            <div className="check-item">
                <div className="check-item-left">
                    <input type="checkbox" className="checkbox-wrap__input"/>
                    <img src="https://product.hstatic.net/1000184601/product/women_vang_1_4cd1570bc17649a18cc392b5fceeecb5_grande.jpg" alt="iphone" className="check-item-left__img"/>
                    <span>Áo Thun Nữ WTS 2020</span>
                </div>
                <div className="check-item-middle">
                    <div className="btn-group middle-btn">
                        <button type="button" className="btn-quantity">-</button>
                        <button type="button" className="btn-quantity">1</button>
                        <button type="button" className="btn-quantity">+</button>
                    </div>
                    <div className="middle-color">
                        <select name="color" id="select-color" className="select-color">
                            <option value="den">Đen</option>
                            <option value="hong">Hồng</option>
                            <option value="trang">Trắng</option>
                            <option value="xanh">Xanh</option>
                        </select>
                    </div>
                </div>
                <div className="check-item-right">
                    <span>250.000đ</span>
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
