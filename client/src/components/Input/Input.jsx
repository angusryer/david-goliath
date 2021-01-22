import React from "react";
import "./Input.scss";
import checkMark from "./check.svg";

export const Input = ({ getInput }) => {
	return (
		<form
			className='input'
			onSubmit={(e) => {
				e.preventDefault();
				getInput(e.target["user-input"].value);
			}}
		>
			<input
				type='number'
				name='user-input'
				id='user-input'
				className='input__heightValue'
				placeholder='Enter your height in meters'
			/>
			<button
				type='submit'
				name='submit-height'
				id='submit-height'
        className='input__heightButton'
			>
				<img src={checkMark} alt='Submit your height' className="input__buttonImage"/>
        
			</button>
		</form>
	);
};
