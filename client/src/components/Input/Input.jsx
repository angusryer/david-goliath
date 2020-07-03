import React from 'react';
import './Input.scss';

export const Input = () => {
    return (
        <form className="input">
            <input type="number" name="user-input" id="user-input" className="input__entry" placeholder="Enter your height in inches" />
        </form>
    )
}
