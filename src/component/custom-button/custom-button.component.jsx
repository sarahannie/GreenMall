import React from 'react';
import './custom-button.style.scss'

const CustomButton =({children,isGooglSignIn, inverted, ...otherProps}) =>(
    <button className={`${inverted ? 'inverted':""}${isGooglSignIn ? 'google-sign-in':""} custom-button`} {...otherProps}>
        {children}
    </button>
);
export default CustomButton;