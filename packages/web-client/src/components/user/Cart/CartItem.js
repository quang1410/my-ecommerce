import React from "react";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const item = props.item;

  const dispatch = useDispatch();

  const incrementQuantity = (item) => {
    dispatch.cart.updateItem({ ...item, quantity: item.quantity + 1 });
  };

  const decrementQuantity = (item) => {
    dispatch.cart.updateItem({ ...item, quantity: item.quantity - 1 });
  }

  const onDeleteItem = (item) => {
    dispatch.cart.removeItem(item)
  }

  return (
    <div className="items">
      <div className="check-item">
        <div className="check-item-left">
          <input type="checkbox" className="checkbox-wrap__input" />
          <img src={item.image} alt="ảnh" className="check-item-left__img" />
          <span>{item.title}-{item.color}-{item.size}</span>
        </div>
        <div className="check-item-middle">
          <div className="btn-group middle-btn">
            <button
              type="button"
              className="btn-quantity"
              onClick={decrementQuantity.bind(this,item)}
              disabled={item.quantity===1}
            >
              -
            </button>
            <button type="button" className="btn-quantity">
              {item.quantity}
            </button>
            <button
              type="button"
              className="btn-quantity"
              onClick={incrementQuantity.bind(this, item)}
            >
              +
            </button>
          </div>
          {/* <div className="check-select">
            <div className="middle-color">
              <select name="color" id="select-color" className="select-color">
                <option value="den">Đen</option>
                <option value="hong">Hồng</option>
                <option value="trang">Trắng</option>
                <option value="xanh">Xanh</option>
              </select>
            </div>
            <div className="middle-color">
              <select name="color" id="select-color" className="select-color">
                <option value="den">S</option>
                <option value="hong">M</option>
                <option value="trang">L</option>
                <option value="xanh">XL</option>
              </select>
            </div>
          </div> */}
        </div>
        <div className="check-item-right">
          <span>{Number(item.price*item.quantity).toLocaleString("de-DE")}</span>
          <div className="item-right-icon">
            <i className="bx bxs-heart"></i>
            <i className="bx bx-trash" onClick={onDeleteItem.bind(this, item)}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
