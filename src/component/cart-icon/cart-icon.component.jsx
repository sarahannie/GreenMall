import React from 'react';
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { selectCartItemCount } from '../cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../cart/cart.action';
import './cart-icon.style.scss';

const CartIcon = ({toggleCartHidden, itemCount}) =>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch =>({
    toggleCartHidden:() => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount 
})

export default connect(mapStateToProps,mapDispatchToProps) (CartIcon);