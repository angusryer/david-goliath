import React from "react";
import "./User.scss";
import avatar from "./avatar.png";

export const User = ({ userHeight }) => {
	return (
		<div className='user'>
			<div
				className='user__box'
				style={{height: userHeight}}
			>
				<img src={avatar} alt='User Avatar' className="user__box-content" />
			</div>
			<span className='user__text'>YOU</span>
		</div>
	);
};
