import React from "react";
import CustomButton from '../custom-button/custom-button.component';
import { connect } from "react-redux";
import { selectCartItems } from "../cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { useNavigate } from 'react-router-dom';
import { toggleCartHidden } from "../../component/cart/cart.action";
import CartItem from "../cart-item/cart-item.component";
import './cart-dropdown.style.scss';

const CartDropdown = ({ cartItems, dispatch }) =>{ 
    const navigate = useNavigate();
    return(
    <div className="cart-dropdown">
        <div  className="cart-items" >
            {
                cartItems.length?(
                cartItems.map(cartItem =>(
                <CartItem key={ cartItem.id} item={cartItem} />
            ))
            ):(
                <span className="empty-message"> Your cart is empty</span>
            )
            }
        </div>
        <CustomButton onClick={()=>{
             navigate("/checkout");
             dispatch(toggleCartHidden())
             }} >GO TO CHECKOUT</CustomButton>
        
    </div>
)};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export  default connect(mapStateToProps)(CartDropdown);