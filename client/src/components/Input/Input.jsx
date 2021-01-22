import React from "react";
import "./Input.scss";

export const Input = ({ getInput }) => {
	return (
		<form className='input' onSubmit={(e) => e.preventDefault()}>
			<input
				type='number'
				name='user-input'
				id='user-input'
				className='input__heightValue'
				placeholder='Enter your height in meters'
				onChange={(e) => {
					e.preventDefault();
					getInput(e.currentTarget.value);
				}}
			/>
		</form>
	);
};
