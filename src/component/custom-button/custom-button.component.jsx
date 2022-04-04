import React from 'react';
import './custom-button.style.scss'

const CustomButton =({children,isGooglSignIn, ...otherProps}) =>(
    <button className={`${isGooglSignIn ? 'google-sign-in':""} custom-button`} {...otherProps}>
        {children}
    </button>
);
export default CustomButton;